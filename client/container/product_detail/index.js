import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Styles from './style.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setCard } from '../../Store/CurrentUserSlice'
import OutsideClickHandler from 'react-outside-click-handler'
import axios from 'axios'
import { motion } from 'framer-motion'
import { Tooltip } from 'react-tooltip'

//components
import Page_detail_header from '../../components/page_detail_header'
import Banner_2 from '../../components/banner-2'

const Product_detail = ({ cardData }) => {
    const dispatch = useDispatch()
    const { card } = useSelector((state) => state.CurrentUser)

    const [color_visibility, setcolor_visibility] = useState(false)
    const [productCount, setPorductCount] = useState(1)
    const [select_color, setSelect_color] = useState("")
    const [productCatalogColor, setproductCatalogColor] = useState([])
    const [select_color_text, setSelect_color_text] = useState("select color")
    const [active_section, setActive_section] = useState("Description")


    useEffect(() => {
        setproductCatalogColor([...cardData.product_colors])
    }, [])

    const handleSelectColor = (color, text) => {
        const filterColor = cardData.product_colors.filter((i) => i !== text)
        setproductCatalogColor(filterColor)
        setSelect_color(color)
        setSelect_color_text(text)
        setcolor_visibility(false)
    }

    const handler_add_to_card = async (product) => {
        await axios.put(`${process.env.API_URL}/api/card/addtocard`, {
            product_id: product._id
        }, { withCredentials: true }).then((response) => {
            const { success } = response?.data
            if (success) {
                dispatch(setCard([...card, {
                    quatitiy: 1,
                    product
                }]))
            }
        })
    }


    return (
        <motion.div
            className={`${Styles.wrapper} product_detail`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
        >
            <Page_detail_header title={cardData.product_title} />
            <div className={Styles.container}>
                <div className={Styles.shoping_card}>
                    <div className={Styles.col}>
                        <img className={Styles.Preview} src={`${process.env.API_URL}/Uploads/img/${cardData.image[0]}`} alt='' />
                    </div>
                    <div className={Styles.col}>
                        <div className={Styles.blocks_items}>
                            <div className={Styles.block_item}>
                                <img src="" alt='' />
                            </div>
                            <div className={Styles.block_item}>
                                <img src="" alt='' />
                            </div>
                            <div className={Styles.block_item}>
                                <img src="" alt='' />
                            </div>
                            <div className={Styles.block_item}>
                                <img src="" alt='' />
                            </div>
                            <div className={Styles.block_item}>
                                <img src="" alt='' />
                            </div>
                        </div>
                        <div className={Styles.shoping_content}>
                            <span className={Styles.card_title}>${cardData.product_price}</span>
                            <div className={Styles.select_color}>

                                <div className={`${Styles.select_color_button_container} container_button `}>
                                    <OutsideClickHandler onOutsideClick={() => setcolor_visibility(false)}>
                                        <div onClick={() => setcolor_visibility(true)} className={`${Styles.select_button} ${select_color}`}>
                                            <span>{select_color_text}</span>
                                            <i class="ri-arrow-down-s-fill"></i>
                                        </div>
                                        {
                                            color_visibility && (
                                                <div className={`${Styles.select_color_options} select_color_options`}>
                                                    {productCatalogColor?.map((item) => (
                                                        <span
                                                            onClick={() => handleSelectColor(item, item)}
                                                            className={`${item}`}>
                                                            {item}
                                                        </span>
                                                    ))}
                                                </div>
                                            )
                                        }
                                    </OutsideClickHandler>
                                </div>
                            </div>

                            <div className={Styles.row}>
                                <span className={Styles.counter_container}>
                                    <span onClick={() => { productCount > 1 && setPorductCount(productCount - 1) }}>-</span>
                                    <span className={Styles.counterValue}>{productCount}</span>
                                    <span onClick={() => { setPorductCount(productCount + 1) }}>+</span>
                                </span>

                                <Tooltip id="my-tooltip" />
                                <button onClick={() => handler_add_to_card(cardData)} disabled={!card} data-tooltip-id="my-tooltip" data-tooltip-content={!card ? 'To add products to your cart, you must first log in!' : 'Add to Card'} className={Styles.Add_card}>Add To Card</button>
                            </div>
                            <div className={Styles.card_description}>
                                {cardData.description}
                            </div>

                            <div className={Styles.socialapps}>
                                <span>
                                    Share
                                </span>
                                <span>
                                    <Link href='/' >
                                        <i class="ri-facebook-line"></i>
                                    </Link>
                                </span>
                                <span>
                                    <Link href="/" >
                                        <i class="ri-google-line"></i>
                                    </Link>
                                </span>
                                <span>
                                    <Link href="/">
                                        <i class="ri-twitter-line"></i>
                                    </Link>
                                </span>
                                <span>
                                    <Link href="/">
                                        <i class="ri-pinterest-line"></i>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Styles.card_detail}>
                    <div className={Styles.detail_navigation}>
                        <button onClick={() => setActive_section('Description')} className={active_section == 'Description' && Styles.detail_active}>
                            Description
                        </button>
                        <button onClick={() => setActive_section('Additional')} className={active_section == 'Additional' && Styles.detail_active} >
                            Additional Information
                        </button>
                        <button onClick={() => setActive_section('Reviews')} className={active_section == 'Reviews' && Styles.detail_active}>
                            Reviews (3)
                        </button>
                    </div>
                    <div className={Styles.detail_content}>
                        {active_section == 'Description' && (
                            <div className={Styles.active_section}>
                                <span>{cardData.description}</span>
                            </div>
                        )}
                        {active_section == 'Additional' && (
                            <div className={Styles.active_section}>
                                <span>{cardData.additionalInfo}</span>
                            </div>
                        )}
                    </div>
                </div>

            </div>
            <Banner_2 />
        </motion.div >
    )
}

export default Product_detail