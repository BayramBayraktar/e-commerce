
import { useEffect, useState } from 'react'
import axios from "axios"
import Style from './style.module.css'
import { motion } from 'framer-motion'

//redux
import { useDispatch, useSelector } from 'react-redux'
import { setCard } from '../../Store/CurrentUserSlice'

//components
import Page_detail_header from '../../components/page_detail_header'
import Banner_2 from '../../components/banner-2'


const Shoping_card_detail = () => {
    const dispatch = useDispatch()
    const { card } = useSelector((state) => state.CurrentUser)
    const [change_quantitiy, setchange_quantity] = useState(null)

    useEffect(() => {
        const fetchShoppingCard = async () => {
            const response = await axios.get(`${process.env.API_URL}/api/card/getshopingcard`, { withCredentials: true });
            const { products } = response.data;
            dispatch(setCard(products));
        }
        fetchShoppingCard()
        setchange_quantity(null)
    }, [change_quantitiy])


    const handlerQuantity = async (_id, quantity) => {
        await axios.put(`${process.env.API_URL}/api/card/shopping-card-quantity/${_id}`, { quantity }, { withCredentials: true })
            .then((response) => {
                if (response && response.data) {
                    const { success } = response.data
                    if (success) {
                        setchange_quantity(success)
                    }
                }
            })
    }


    const remove_card = async ({ product }) => {
        await axios.get(`${process.env.API_URL}/api/card/${product._id}`, { withCredentials: true }).then((response) => {
            try {
                const { success } = response.data
                if (success) {
                    const updateCard = card.filter((item) => { return item.product._id !== product._id })
                    dispatch(setCard(updateCard))
                }
            } catch (error) {
                console.log(error)
            }
        })
    }

    const checkout = async () => {
        if (card.length > 0) {
            const items = card.map((item) => ({
                ...item,
            }))

            await axios.post(`${process.env.API_URL}/api/card/create-checkout-session`, {
                items: items,
            }).then((response) => {
                if (response.data) {
                    return window.location.href = response.data.url
                }
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    const truncateTitle = (text, max) => {
        if (text?.length <= max) {
            return text
        } else {
            return text?.substring(0, max) + "...";
        }
    }

    const total = () => {
        let totalPrice = 0
        if (card && card.length > 0) {
            card.forEach(element => {
                totalPrice += element.product?.product_price
            });
            return "$" + totalPrice
        }
    }


    return (
        <motion.div
            className={Style.wrapper}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
        >
            <Page_detail_header title='SHOPPING CART' extra_text="Cart" />
            <div className={Style.container}>
                <div className={Style.cards}>
                    {
                        card && card.map((item, index) => (
                            <div key={index} className={Style.Card}>
                                <div className={Style.left_side}>
                                    <img src={`${process.env.API_URL}/uploads/img/${item.product?.image[0]}`} alt='' />
                                    <div className={Style.text_container}>
                                        <span className={Style.left_text}> {truncateTitle(item.product?.product_title, 105)} </span>
                                        <span className={Style.left_price}>{item.product?.product_price} $</span>
                                    </div>
                                </div>
                                <div className={Style.right_side}>
                                    <div className={Style.counter}>
                                        <span onClick={() => handlerQuantity(item.product?._id, item.quantity - 1)}>-</span>
                                        <span>{item.quantity}</span>
                                        <span onClick={() => handlerQuantity(item.product?._id, item.quantity + 1)}>+</span>
                                    </div>
                                    <div className={Style.product_value}>
                                        {`${item.product?.product_price}$`}
                                    </div>
                                    <div onClick={() => remove_card(item)} className={Style.remove_product}>X</div>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className={Style.container_payment}>
                    <div className={Style.paymnet_left}>
                        <input placeholder="Enter Coupon Code" type="text" alt="" />
                        <button>APPLY</button>
                    </div>
                    <div className={Style.paymnet_right}>
                        <div className={Style.payment_buttons}>
                            <button className={Style.button}>UPDATE CART</button>
                            <button onClick={() => checkout()} className={Style.button}>PROCEED TO CHECKOUT</button>
                        </div>
                        <div className={Style.right_items}>
                            <div className={Style.item}>
                                <span>CART SUBTOTAL:</span>
                                <span>$3.489</span>
                            </div>
                            <div className={` ${Style.item_handling}`}>
                                <span>SHIPPING AND HANDLING</span>
                                <div className={Style.handling_content}>
                                    <div className={Style.handling_item}>
                                        <input id='1' type="radio" />
                                        <label htmlFor='1'>Float Rate: <span className={Style.mark_price}>$10.08</span></label>
                                    </div>
                                    <div className={Style.handling_item}>
                                        <input id='1' type="radio" />
                                        <label htmlFor='1'>Float Rate: <span className={Style.mark_price}>$10.08</span></label>
                                    </div>
                                    <div className={Style.handling_item}>
                                        <input id='1' type="radio" />
                                        <label htmlFor='1'>Float Rate: <span className={Style.mark_price}>$10.08</span></label>
                                    </div>
                                    <div className={Style.handling_item}>
                                        <input id='1' type="radio" />
                                        <label htmlFor='1'>Float Rate: <span className={Style.mark_price}>$10.08</span></label>
                                    </div>
                                </div>
                            </div>
                            <div className={`${Style.item} ${Style.total_price}`}>
                                <span>ORDER TOTAL:</span>
                                <span>{total()}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Banner_2 />
        </motion.div >
    )
}

export default Shoping_card_detail