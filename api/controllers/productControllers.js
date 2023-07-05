const Products_Schema = require('../models/product.model')
const User_schema = require('../models/user.model')

exports.Create_Product = async (req, res) => {
    try {
        const Product_Value = new Products_Schema({
            product_title: req.body.product_title,
            catalog_name: req.body.catalog_name,
            remaining_product: req.body.remaining_product,
            image: req.body.images, // this will be corrected
            product_price: req.body.product_price,
            description: req.body.description,
            additionalInfo: req.body.additionalInfo,
            product_colors: req.body.product_colors
        })

        const result = await Product_Value.save()
        if (result) {
            res.status(200).json({ success: true })
        } else {
            res.status(500).json({ success: false })
        }
    } catch (error) {
        if (process.env.NODE_ENV === "development") {
            console.log(error)
        }
        res.status(401).json({ success: false, message: 'something went wrong' })
    }
}

exports.New_Product = async (req, res) => {
    try {
        const { product_type } = req.params
        if (product_type === "allproduct") {
            await Products_Schema.find({}).sort({
                createdAt: 1 // 
            }).limit(req.query.limit).then((result) => {
                res.json(result)
            }).catch((err) => {
                console.log(err)
            });
        } else {
            await Products_Schema.find({ catalog_name: { $regex: product_type, $options: 'i' } }).sort({
                createdAt: 1 // 
            }).then((result) => {
                res.json(result)
            }).catch((err) => {
                console.log(err)
            });
        }

    } catch (error) {
        if (process.env.NODE_ENV === "development") {
            console.log(error)
        }
        res.status(400).json({ success: false, message: "Something went Wrong" })
    }
}

exports.All_Product = async (req, res) => {
    try {
        const { product_type } = req.params
        if (product_type === "allproduct") {
            await Products_Schema.find().limit(req.query.limit).then((result) => {
                res.json(result)
            }).catch((err) => {
                console.log(err)
            });
        } else {
            await Products_Schema.find({ catalog_name: { $regex: product_type, $options: 'i' } }).limit(req.query.limit).then((result) => {
                res.json(result)
            }).catch((err) => {
                console.log(err)
            });
        }
    } catch (error) {
        if (process.env.NODE_ENV === "development") {
            console.log(error)
        }
        res.status(400).json({ success: false, message: "Something went Wrong" })
    }
}

exports.Popular_Product = async (req, res) => {
    try {
        const { product_type } = req.params
        if (product_type === "allproduct") {

            const products = await Products_Schema.find({}).limit(req.query.limit);
            const popular_Product = products.sort((a, b) => {
                const A = a.pageviews + a.NumberOfSales
                const B = b.pageviews + b.NumberOfSales
                return B - A
            })
            if (popular_Product.length !== 0) {
                res.json(popular_Product)
            }

        } else {
            await Products_Schema.find({ catalog_name: { $regex: product_type, $options: 'i' } }).sort({ pageviews: -1, NumberOfSales: -1 }).then((result) => {
                res.json(result)
            }).catch((err) => {
                console.log(err)
            });
        }
    } catch (error) {
        if (process.env.NODE_ENV === "development") {
            console.log(error)
        }
        res.status(400).json({ success: false, message: "Something went Wrong" })
    }
}

exports.Salles_product = async (req, res) => {
    try {

        const { product_type } = req.params

        if (product_type === "allproduct") {
            await Products_Schema.find().sort({
                NumberOfSales: -1
            }).then((result) => {
                res.json(result)
            }).catch((err) => {
                if (process.env.NODE_ENV === "development") {
                    console.log(err)
                } else {
                    res.status(400).json({ success: false })
                }
            })
        } else {
            await Products_Schema.find({ catalog_name: { $regex: product_type, $options: 'i' } }).sort({
                NumberOfSales: -1
            }).then((result) => {
                res.json(result)
            }).catch((err) => {
                if (process.env.NODE_ENV === "development") {
                    console.log(err)
                } else {
                    res.status(400).json({ success: false })
                }
            })
        }
    } catch (error) {
        if (process.env.NODE_ENV === "development") {
            console.log(error)
        }
        res.status(400).json({ success: false })
    }
}

exports.Favorite_product = async (req, res) => {
    try {
        const { product_id, current_id } = req.body.data

        if (product_id && current_id) {

            /*not re-registering the same favorite  */
            await User_schema.findByIdAndUpdate(current_id, {
                $pull: { favorite: product_id }
            }), {
                new: true
            }

            await User_schema.findByIdAndUpdate(current_id, {
                $push: { favorite: product_id }
            }), {
                new: true
            }
        }

    } catch (error) {
        if (process.env.NODE_ENV === "development") {
            console.log(error)
        } else {
            res.status(404).json({ success: False, message: "Something went Wrong!" })
        }
    }
}


