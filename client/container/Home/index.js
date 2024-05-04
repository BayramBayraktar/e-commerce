import React from 'react'
import Style from './style.module.css'
import Main_Slider from '../../components/Main_slider'
import { motion } from "framer-motion"

//components
import Product from '../../components/product'
import Banner from '../../components/banner'
import Banner_2 from '../../components/banner-2'

const Home_Page = () => {
    return (
        <motion.div
            className={Style.wrapper}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
        >
            <div className={Style.main_content}>
                <div className={Style.slider_container}>
                    <Main_Slider />
                </div>
                <div className={Style.banner_Card}>
                    <img src="" alt='' />
                    <span className={Style.banner_card_title}>Follow un on facebook</span>
                    <span className={Style.banner_card_text}>sed ut persopeis unde amina liste notus error sit</span>
                    <div className={Style.banner_card_button}><i class="ri-facebook-fill"></i> Follow</div>
                </div>
            </div>
            <div className={Style.popular_container}>
                <Product title="POPULAR ITEM" />
                <Product title="NEW ITEM" />
            </div>
            <Banner />
            <div className={Style.popular_container}>
                <Product title="Products" />
            </div>
            <div className={Style.Morebtn} >
                <button>WIEV MORE <i class="ri-refresh-line"></i></button>
            </div>
            <Banner_2 />
        </motion.div >
    )
}

export default Home_Page