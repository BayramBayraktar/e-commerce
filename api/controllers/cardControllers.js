const User_schma = require('../models/user.model')
const Product_schma = require('../models/product.model')
const Jwt = require('jsonwebtoken')
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)




exports.addToCard = async (req, res) => {
    try {
        const current_user = req.user;
        const product_id = req.body.product_id

        const addedProduct = await User_schma.findOne({ _id: current_user.shoping_card })
        if (addedProduct) {
            res.json({ success: false, message: "The product has already been added!" })
        } else {
            await User_schma.findByIdAndUpdate(current_user, {
                $push: {
                    shoping_card: [
                        { product: product_id }
                    ]
                }
            }).then(async (result) => {
                if (result) {
                    await res.json({ success: true, message: "The product has been successfully added to the cart" })
                }
            }).catch((err) => {
                if (process.env.NODE_ENV === "development") {
                    console.log(err)
                }
                res.json({ success: false, message: "The product could not be added to the cart!" })
            }), { new: true }
        }

    } catch (error) {
        if (process.env.NODE_ENV === "development") {
            console.log(error)
        } else {
            res.status(404).json({ success: false, message: "Something Went Wrong!" })
        }
    }
}

exports.Shoping_card = async (req, res) => {

    const shoppingCart = req.user.shoping_card
    const productIds = shoppingCart.map(item => item.product)
    const products = await Product_schma.find({ _id: { $in: productIds } })

    const response = shoppingCart.map(item => {
        const product = products.find(product => product._id.equals(item.product))
        return {
            product,
            quantity: item.quantity
        }
    })

    res.json({ success: true, products: response })
}

exports.RemoveToCard = async (req, res) => {
    const { remove_id } = req.params
    const current_user = req.user;
    if (remove_id) {
        await User_schma.findByIdAndUpdate(req.user, {
            $pull: {
                shoping_card: { product: remove_id }
            }
        }).then((result) => {
            if (result) {
                Product_schma.find({ _id: current_user.shoping_card }).then((response) => {
                    res.json({ success: true, message: "Removed product" })
                })
            }
        }).catch((err) => {
            res.json({ success: false, message: "Not removed" })
        }), { new: true }
    } else {
        res.json({ success: false, message: "Something Went Wrong!" })
    }

}

exports.CreateCheckoutSession = async (req, res) => {
    try {
        const { items } = req.body
        let token
        if (items) {
            token = Jwt.sign({ items }, process.env.JWT_SECRET_KEY)
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: items.map(item => ({
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.product.product_title,
                    },
                    unit_amount: item.product.product_price * 100,
                },
                quantity: item.quantity,
            })),
            mode: 'payment',
            success_url: `${process.env.BASE_URL}/payment/success/${token}`,
            cancel_url: `${process.env.BASE_URL}/payment/cancel`,
        });

        res.json({ url: session.url });

    } catch (error) {
        console.log(error)
    }
}

exports.ClearToCard = async (req, res) => {
    try {
        const token = req.query.token
        if (token) {
            const decoded = await Jwt.verify(token, process.env.JWT_SECRET_KEY)
            const removeIds = decoded.map(item => item.product); // decoded'dan ürün id'lerini alın

            if (decoded.length > 0) {
                await User_schma.findByIdAndUpdate({ _id: req.user._id }, {
                    $pull: {
                        shoping_card: { product: removeIds._id }
                    }
                }).then((response) => {
                    res.json({ success: true, data: response })
                })
            }
        }

    } catch (error) {
        console.log(error)
    }
}

exports.shopping_Card_Quantitiy = async (req, res) => {
    try {
        const id = req.params._id
        const quantity_update = req.body.quantity
        const user = req.user
        const card_shoping_item = user.shoping_card.find(item => item.product.toString() === id)
        card_shoping_item.quantity = quantity_update
        await user.save()
        res.json({ success: true })

    } catch (error) {
        console.log(error)
    }

}


