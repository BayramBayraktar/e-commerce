import React, { useState } from 'react'
import Link from 'next/link'
import OutsideClickHandler from 'react-outside-click-handler'
import styleCss from './style.module.css'
//components
import Page_detail_header from '../../components/page_detail_header'
import Banner_2 from '../../components/banner-2'

const Product_detail = () => {

    const [color_visibility, setcolor_visibility] = useState(false)
    const [productCount, setPorductCount] = useState(1)
    const [select_color, setSelect_color] = useState("")
    const [select_color_text, setSelect_color_text] = useState("select color")
    const [active_section, setActive_section] = useState("Description")

    const handleSelectColor = (color, text) => {
        setSelect_color(color)
        setSelect_color_text(text)
        setcolor_visibility(false)
    }


    /* Select_color data */
    const product_catalog_color = [
        {
            "color": "red",
            "name": "Gray Red"
        },
        {
            "color": "blue",
            "name": "Gray Blue"
        },
        {
            "color": "black",
            "name": "Gray Black"
        },

    ]

    return (
        <div className={`${styleCss.wrapper} product_detail`}>
            <Page_detail_header title={'Atadasdsada'} />
            <div className={styleCss.container}>
                <div className={styleCss.shoping_card}>
                    <div className={styleCss.col}>
                        <img className={styleCss.Preview} src="" alt='' />
                    </div>
                    <div className={styleCss.col}>
                        <div className={styleCss.blocks_items}>
                            <div className={styleCss.block_item}>
                                <img src="" alt='' />
                            </div>
                            <div className={styleCss.block_item}>
                                <img src="" alt='' />
                            </div>
                            <div className={styleCss.block_item}>
                                <img src="" alt='' />
                            </div>
                            <div className={styleCss.block_item}>
                                <img src="" alt='' />
                            </div>
                            <div className={styleCss.block_item}>
                                <img src="" alt='' />
                            </div>
                        </div>
                        <div className={styleCss.shoping_content}>
                            <span className={styleCss.card_title}>$299.99</span>
                            <div className={styleCss.select_color}>

                                <div className={`${styleCss.select_color_button_container} container_button `}>
                                    <OutsideClickHandler onOutsideClick={() => setcolor_visibility(false)}>
                                        <div onClick={() => setcolor_visibility(true)} className={`${styleCss.select_button} ${select_color}`}>
                                            <span>{select_color_text}</span>
                                            <i class="ri-arrow-down-s-fill"></i>
                                        </div>
                                        {
                                            color_visibility && (
                                                <div className={`${styleCss.select_color_options} select_color_options`}>
                                                    {product_catalog_color.map((item) => (
                                                        <span
                                                            onClick={() => handleSelectColor(item.color, item.name)}
                                                            className={`${item.color}`}>
                                                            {item.name}
                                                        </span>
                                                    ))}
                                                </div>
                                            )
                                        }
                                    </OutsideClickHandler>

                                </div>

                            </div>

                            <div className={styleCss.row}>
                                <span className={styleCss.counter_container}>
                                    <span onClick={() => { setPorductCount(productCount + 1) }} >+</span>
                                    <span className={styleCss.counterValue}>{productCount}</span>
                                    <span onClick={() => { productCount > 1 && setPorductCount(productCount - 1) }} >-</span>
                                </span>
                                <button className={styleCss.Add_card}>Add To Card</button>
                            </div>

                            <div className={styleCss.card_description}>
                                sed ur ajdaos ıaefme ımefm eaoaooaoaf femıfe mf ımefıemfe mıemıwcmıe mıecme mevvımevm  evm evımm evımev
                            </div>

                            <div className={styleCss.socialapps}>
                                <span>
                                    <Link href="/" >
                                        Share
                                    </Link>
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
                <div className={styleCss.card_detail}>
                    <div className={styleCss.detail_navigation}>
                        <button onClick={() => setActive_section('Description')} className={active_section == 'Description' && styleCss.detail_active}>
                            Description
                        </button>
                        <button onClick={() => setActive_section('Additional')} className={active_section == 'Additional' && styleCss.detail_active} >
                            Additional Information
                        </button>
                        <button onClick={() => setActive_section('Reviews')} className={active_section == 'Reviews' && styleCss.detail_active}>
                            Reviews (3)
                        </button>
                    </div>
                    <div className={styleCss.detail_content}>
                        <div className={active_section == 'Description' && styleCss.active_section}>
                            <span>
                                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                            </span>
                            <span>
                                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                            </span>
                        </div>

                        <div className={active_section == 'Additional' && styleCss.active_section}>
                            İKİNCİ
                            <span>
                                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                            </span>
                            <span>
                                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                            </span>
                        </div>
                    </div>
                </div>

            </div>
            <Banner_2 />
        </div >
    )
}

export default Product_detail