import React, { useEffect } from 'react'
import Link from 'next/link'
//redux
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Style from './style.module.css'
import { toast } from 'react-toastify'
import { setCard } from '../../Store/CurrentUserSlice'



const calculateTotalPrice = (card) => {
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

const Shopping_card = ({ visibility, setVisibility }) => {

    const dispatch = useDispatch()
    const { card } = useSelector((state) => state.CurrentUser)

    useEffect(() => {
        if (visibility) {
            return document.body.classList.add("Fixed")
        } else {
            return document.body.classList.remove("Fixed")
        }
    }, [visibility])



    const handler_remove_card = async ({ product }) => {
        await axios.get(`${process.env.API_URL}/api/card/${product?._id}`, { withCredentials: true }).then((response) => {
            const { success, message } = response?.data
            if (success) {
                const updateCard = card.filter((item) => item.product?._id !== product._id)
                dispatch(setCard([...updateCard]))
                toast.success(message, {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark'
                });
            } else {
                toast.info(message, {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark'
                });
            }
        })
    }

    const checkout = async () => {
        if (card.length > 0) {
            await axios.post(`${process.env.API_URL}/api/card/create-checkout-session`, {
                items: card,
            }).then((response) => {
                if (response.data) {
                    return window.location.href = response.data.url
                }
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    const totalPrice = calculateTotalPrice(card)

    return visibility && (
        <div className={Style.wrapper}>
            <div onClick={() => setVisibility(false)} className={Style.backdrop}></div>
            <div className={Style.container}>
                <div className={Style.card_header}>
                    <span className={Style.header_title}>SHOPPING CART</span>
                </div>
                <div className={Style.card_content}>
                    {card && card.map((card, key) => (
                        <div key={key} className={Style.product}>
                            <div className={Style.product_content}>
                                <span onClick={() => handler_remove_card(card)} className={Style.product_close}><i class="ri-close-line"></i></span>
                                <img src={`${process.env.API_URL}/Uploads/img/${card.product?.image[0]}`} alt='' />
                                <div className={Style.text_content}>
                                    <span className={Style.product_title}>
                                        {card.product?.product_title}
                                    </span>
                                    <span className={Style.product_price} >{card.product?.product_price}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={Style.card_actions}>
                    <div className={Style.total_price_content}>
                        <span className={Style.subtotal}>SUBTOTAL:</span>
                        <span className={Style.price}>{`${totalPrice}$`}</span>
                    </div>
                    <Link href='/shoping' className={Style.button}>
                        VIEW CART
                    </Link>
                    <div onClick={() => checkout()} className={`${Style.button} ${Style.chekout}`}>
                        CHECKOUT
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shopping_card