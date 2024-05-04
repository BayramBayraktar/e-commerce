const Products_Schema = require('../models/product.model')
const User_schema = require('../models/user.model')

exports.Create_Product = async (req, res) => {
    try {
        const Product_Value = new Products_Schema({
            By_Id: req.body.By_Id,
            product_title: req.body.product_title,
            catalog_name: req.body.catalog_name,
            remaining_product: req.body.remaining_product,
            image: req.body.images, // this will be corrected
            product_price: req.body.product_price,
            description: req.body.description,
            additionalInfo: req.body.additionalInfo,
            product_colors: req.body.product_colors,
            pageviews: req.body.pageviews,
            NumberOfSales: req.body.NumberOfSales
        })

        const result = await Product_Value.save()
        if (result) {
            res.status(200).json({ success: true })
        } else {
            res.status(500).json({ success: false })
        }
    } catch (error) {
        console.log(error)
    }
}

exports.New_Product = async (req, res) => {
    try {
        const { product_type } = req.params
        if (product_type === "allproduct") {
            await Products_Schema.find({}).sort({
                createdAt: -1
            }).limit(req.query.limit).then((response) => {
                res.status(200).json({ success: true, response })
            }).catch((err) => {
                res.status(404).json({ success: false })

            });
        } else {
            await Products_Schema.find({ catalog_name: { $regex: product_type, $options: 'i' } }).sort({
                createdAt: -1
            }).then((response) => {
                res.status(200).json({ success: true, response })
            }).catch((err) => {
                res.status(404).json({ success: false })
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
            await Products_Schema.find().limit(req.query.limit).then((response) => {
                res.status(200).json({ success: true, response: response })
            }).catch((err) => {
                res.status(400).json({ success: false })
            });
        } else {
            await Products_Schema.find({ catalog_name: { $regex: product_type, $options: 'i' } }).limit(req.query.limit).then((response) => {
                if (response.length) {
                    res.status(200).json({ success: true, response: response })
                } else {
                    res.status(400).json({ success: false })
                }
            }).catch((err) => {
                res.status(400).json({ success: false })
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
            const response = products.sort((a, b) => {
                const A = a.pageviews + a.NumberOfSales
                const B = b.pageviews + b.NumberOfSales
                return B - A
            })
            if (response.length) {
                res.status(200).json({ success: true, response })
            } else {
                res.status(404).json({ success: false })
            }

        } else {
            await Products_Schema.find({ catalog_name: { $regex: product_type, $options: 'i' } }).sort({ pageviews: -1, NumberOfSales: -1 }).then((response) => {
                res.status(200).json({ success: true, response })
            }).catch((err) => {
                res.status(404).json({ success: false })
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
            }).then((response) => {
                res.status(200).json({ success: true, response })
            }).catch((err) => {
                res.status(404).json({ success: false })
            })
        } else {
            await Products_Schema.find({ catalog_name: { $regex: product_type, $options: 'i' } }).sort({
                NumberOfSales: -1
            }).then((response) => {
                res.status(200).json({ success: true, response })
            }).catch((err) => {
                res.status(404).json({ success: false })
            })
        }
    } catch (error) {
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
        res.status(404).json({ success: False, message: "Something went Wrong!" })
    }
}

exports.ProductDetail = async (req, res) => {
    try {
        await Products_Schema.findOne({ _id: req?.params?.id }).then((response) => {
            res.status(200).json({ success: true, response: response })
        }).catch((error) => {
            res.status(400).json({ success: false })
        })

    } catch (error) {
        console.log(error)
    }
}


