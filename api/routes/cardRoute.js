const router = require("express").Router();

const Auth_middleware = require('../middlewares//auth')

const {
    addToCard,
    Shoping_card,
    RemoveToCard,
    CreateCustomers,
    ClearToCard,
    shopping_Card_Quantitiy,
} = require('../controllers/cardControllers');

router.get("/getshopingcard", Auth_middleware, Shoping_card);
router.put("/addtocard", Auth_middleware, addToCard);
router.get("/:remove_id", Auth_middleware, RemoveToCard);
router.post("/create-checkout-session", CreateCustomers);
router.post("/clear-to-card:token", Auth_middleware, ClearToCard);
router.put("/shopping-card-quantity/:_id", Auth_middleware, shopping_Card_Quantitiy);

module.exports = router;
