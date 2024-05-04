const router = require('express').Router();
/* middlewares */
const Auth = require('../middlewares/auth')
const product_img = require('../middlewares/lib/product_image_upload')


const {
    Create_Product,
    New_Product,
    All_Product,
    Popular_Product,
    Salles_product,
    Favorite_product,
    ProductDetail
} = require('../controllers/productControllers')

/* post */
router.post('/create', Create_Product)
/* get */
router.get('/:product_type/new', New_Product)
router.get('/:product_type/all', All_Product)
router.get('/:product_type/popular', Popular_Product)
router.get('/:product_type/sales', Salles_product)

router.get('/productdetail/:id', ProductDetail)
/* put */
router.put('/favorite', Favorite_product)

module.exports = router
