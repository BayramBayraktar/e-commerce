import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
import OutsideClickHandler from 'react-outside-click-handler'
import styleCss from './style.module.css'

//components
import Page_detail_header from '../../components/page_detail_header'
import Banner_2 from '../../components/banner-2'


const Product = () => {

    const router = useRouter()

    const [select_product_list_type, Setselect_product_list_type] = useState("All")
    const [select_product_list_visibility, Setselect_product_list_visibility] = useState(false)
    const [Products, setProducts] = useState([])

    const handleSelectProductList = (value) => {
        Setselect_product_list_type(value)
        if (value && value !== select_product_list_type) {
            Setselect_product_list_visibility(false)
        }
    }

    useEffect(() => {
        if (router.query) {
            if (router.query?.product) {
                axios.get(`${process.env.API_URL}/api/product/${router.query?.product}/${select_product_list_type}`).then((result) => {
                    const { data } = result
                    if (data) {
                        setProducts(data)
                    }
                }).catch((err) => {
                    console.log(err)
                });
            }
        }
    }, [router, select_product_list_type])



    return (
        <div className={styleCss.wrapper}>
            <Page_detail_header title={'deneme'} />
            <div className={styleCss.container}>
                <div className={styleCss.content_filter}>
                    <OutsideClickHandler onOutsideClick={() => Setselect_product_list_visibility(false)}>
                        <div className={styleCss.filter_button}>
                            <div onClick={() => Setselect_product_list_visibility(true)} className={styleCss.filter_button_container}>
                                <label htmlFor={select_product_list_type}>{select_product_list_type ? select_product_list_type : "FILTER BY"}</label>
                                <span><i class="ri-arrow-drop-down-fill"></i></span>
                            </div>
                            {
                                select_product_list_visibility && (
                                    <div className={styleCss.filter_button_content}>
                                        <div className={styleCss.filter_button_option}>
                                            <input onChange={(e) => handleSelectProductList(e.target.value)} type="radio" name='product_list' value="New" id='New' />
                                            <label htmlFor='New'>New</label>
                                        </div>
                                        <div className={styleCss.filter_button_option}>
                                            <input onChange={(e) => handleSelectProductList(e.target.value)} type="radio" name='product_list' value="All" id='All' />
                                            <label htmlFor='All'>All</label>
                                        </div>
                                        <div className={styleCss.filter_button_option}>
                                            <input onChange={(e) => handleSelectProductList(e.target.value)} type="radio" name='product_list' value="Popular" id='Popular' />
                                            <label htmlFor='Popular'>Popular</label>
                                        </div>
                                        <div className={styleCss.filter_button_option}>
                                            <input onChange={(e) => handleSelectProductList(e.target.value)} type="radio" name='product_list' value="Sales" id='Sales' />
                                            <label htmlFor='Sales'>Sales</label>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </OutsideClickHandler>
                    <div className={styleCss.content_filter_center}> {Products.length}, result in {router?.query?.product}</div>
                    <div className={styleCss.content_filter_right}>
                        <span>info</span>
                        <i class="ri-information-line"></i>
                    </div>
                </div>
                <div className={styleCss.content}>
                    <div className={styleCss.product_items}>
                        <div className={styleCss.catalog_content}>
                            <div className={styleCss.catalog_menu}>
                                <Link href="/Accessories">
                                    Accessories
                                </Link>
                                <Link href="/Alcohol">
                                    Alcohol
                                </Link>
                                <Link href="/Art">
                                    Art
                                </Link>
                                <Link href="/Books">
                                    Books
                                </Link>
                                <Link href="/Drink">
                                    Drink
                                </Link>
                                <Link href="/Electronics">
                                    Electronics
                                </Link>
                                <Link href="/Flowers_Plants">
                                    Flowers & Plants
                                </Link>
                                <Link href="/Food">
                                    Food
                                </Link>
                                <Link href="/Gadgets">
                                    Gadgets
                                </Link>
                                <Link href="/Garden">
                                    Garden
                                </Link>
                                <Link href="/Grocery">
                                    Grocery
                                </Link>
                                <Link href="/Home">
                                    Home
                                </Link>
                                <Link href="/Jewelry">
                                    Jewelry
                                </Link>
                                <Link href="/Kids_Baby">
                                    Kids & Baby
                                </Link>
                                <Link href="/Mens_Fashion">
                                    Men's Fashion
                                </Link>
                            </div>
                            <div className={styleCss.catalog_banner}>
                                Banner
                            </div>
                        </div>

                        {
                            Products?.map((product, key) => (
                                <Link key={key} href='/' className={styleCss.card}>
                                    <img src={`${process.env.API_URL}/Uploads/img/${product.image[0]}`} alt='' />
                                    <div className={styleCss.card_detail}>
                                        <span className={styleCss.card_title}>{product.product_title}</span>
                                        <span className={styleCss.card_title}>{`${product.product_price} $`}</span>
                                    </div>
                                </Link>
                            ))
                        }

                    </div>

                </div>
            </div>
            <Banner_2 />
        </div>
    )
}

export default Product