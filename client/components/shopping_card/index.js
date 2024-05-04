import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { AnimatePresence, motion } from 'framer-motion'
import Style from './style.module.css'
import { toast } from 'react-toastify'
import { setCard } from '../../Store/CurrentUserSlice'
import { calculateTotalPrice } from '../../utils/calculateTotal'
import CreditCard from '../../container/Credit_Card'
import { SuccessSVG } from '../../public/images/success'


const Shopping_card = ({ visibility, setVisibility }) => {

    const dispatch = useDispatch()
    const { card } = useSelector((state) => state.CurrentUser)
    const [activeMenu, setActiveMenu] = useState('main');

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
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark'
                });
            } else {
                toast.info(message, {
                    position: "top-left",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark'
                });
            }
        })
    }


    return (
        <AnimatePresence>
            {visibility && (
                <div className={Style.wrapper}>
                    <div onClick={() => setVisibility(false)} className={Style.backdrop}></div>
                    <motion.div
                        className={Style.container}
                        initial={{ opacity: 0, translateX: '100%' }}
                        transition={{ duration: 0.1 }}
                        animate={{ opacity: 1, translateX: 0 }}
                        exit={{ opacity: 0, translateX: '100%' }}
                    >
                        {activeMenu === 'main' && (
                            <motion.div
                                initial={{ opacity: 0, translateX: '-100%' }}
                                transition={{ duration: 0.1 }}
                                animate={{ opacity: 1, translateX: 0 }}
                            >
                                <div className={Style.card_header}>
                                    <span className={Style.header_title}>SHOPPING CART</span>
                                </div>

                                <div className={Style.card_content}>
                                    {card?.map((card, key) => (
                                        <div key={key} className={Style.product}>
                                            <div className={Style.product_content}>
                                                <span onClick={() => handler_remove_card(card)} className={Style.product_close}><i class="ri-close-line"></i></span>
                                                <img src={`${process.env.API_URL}/Uploads/img/${card?.product?.image[0]}`} alt='' />
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
                                        <span className={Style.price}>{calculateTotalPrice(card)}</span>
                                    </div>
                                    <Link href='/shoping' className={Style.button}>
                                        VIEW CART
                                    </Link>
                                    <button onClick={() => setActiveMenu('checkout')} disabled={!card} className={`${Style.button} ${Style.chekout}`}>
                                        CHECKOUT
                                    </button>
                                </div>

                            </motion.div>
                        )}
                        {activeMenu == 'checkout' && (
                            <motion.div
                                initial={{ opacity: 0, translateX: '100%' }}
                                transition={{ duration: 0.1 }}
                                animate={{ opacity: 1, translateX: 0 }}
                                exit={{ translateX: '-100%', opacity: 1 }}
                            >
                                <div className={Style.card_header}>
                                    <i onClick={() => setActiveMenu("main")} class="ri-arrow-left-line"></i>
                                    <span className={Style.header_title}>Checkout</span>
                                </div>
                                <CreditCard setActiveMenu={setActiveMenu} />
                            </motion.div>
                        )}
                        {activeMenu == 'successful-menu' && (
                            <motion.div
                                style={{
                                    height: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                initial={{ opacity: 0, translateX: '100%' }}
                                transition={{ duration: 0.1 }}
                                animate={{ opacity: 1, translateX: 0 }}
                                exit={{ translateX: '-100%', opacity: 1 }}
                            >
                                <SuccessSVG setActiveMenu={setActiveMenu} />
                            </motion.div>
                        )}
                    </motion.div>
                </div >
            )
            }
        </AnimatePresence >
    )
}

export default Shopping_card