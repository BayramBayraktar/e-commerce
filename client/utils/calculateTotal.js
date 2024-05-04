export const calculateTotalPrice = (card) => {
    let totalPrice = 0;
    if (card && card.length > 0) {
        for (let i = 0; i < card.length; i++) {
            const product = card[i].product;
            if (product && product.product_price) {
                totalPrice += product.product_price
            }
        }
        return totalPrice
    }
}