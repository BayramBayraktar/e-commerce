import React from 'react'
import PopularCss from './style.module.css'

const Popular_İtem = () => {
    return (
        <div className={PopularCss.container}>
            <div className={PopularCss.title}>
                POPULAR ITEM
            </div>
            <div className={PopularCss.row}>
                <div className={PopularCss.card}>
                    <img src='' alt='' />
                    <div className={PopularCss.card_details}>
                        <span className={PopularCss.card_title}>title</span>
                        <span className={PopularCss.card_price}>price 15</span>
                    </div>
                    <div className={PopularCss.card_hover_screen}>
                        <span className={PopularCss.add}><i class="ri-add-line"></i></span>
                        <span className={PopularCss.heart}><i class="ri-heart-fill"></i></span>
                    </div>
                </div>
                <div className={PopularCss.card}>
                    <img src='' alt='' />
                    <div className={PopularCss.card_details}>
                        <span className={PopularCss.card_title}>title</span>
                        <span className={PopularCss.card_price}>price 15</span>
                    </div>
                    <div className={PopularCss.card_hover_screen}>
                        <span className={PopularCss.add}><i class="ri-add-line"></i></span>
                        <span className={PopularCss.heart}><i class="ri-heart-fill"></i></span>
                    </div>
                </div>
                <div className={PopularCss.card}>
                    <img src='' alt='' />
                    <div className={PopularCss.card_details}>
                        <span className={PopularCss.card_title}> title </span>
                        <span className={PopularCss.card_price}>price 15</span>
                    </div>
                    <div className={PopularCss.card_hover_screen}>
                        <span className={PopularCss.add}><i class="ri-add-line"></i></span>
                        <span className={PopularCss.heart}><i class="ri-heart-fill"></i></span>
                    </div>
                </div>
                <div className={PopularCss.card}>
                    <img src='' alt='' />
                    <div className={PopularCss.card_details}>
                        <span className={PopularCss.card_title}>title</span>
                        <span className={PopularCss.card_price}>price 15 </span>
                    </div>
                    <div className={PopularCss.card_hover_screen}>
                        <span className={PopularCss.add}><i class="ri-add-line"></i></span>
                        <span className={PopularCss.heart}><i class="ri-heart-fill"></i></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popular_İtem