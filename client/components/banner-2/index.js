import React from 'react'
import Style from './style.module.css'

const Banner_two = () => {
    return (
        <div className={Style.banner}>
            <div className={Style.banner_col}>
                <div className={Style.col_icon}>
                    <img src="/images/delevery.png" alt='' />
                </div>
                <div className={Style.col_content}>
                    <span className={Style.content_title}>
                        FREE DELIVERY
                    </span>
                    <span className={Style.content_text}>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        Sed ut perspiciatis unde omnis iste natus error sit
                    </span>
                </div>
            </div>
            <div className={Style.banner_col}>
                <div className={Style.col_icon}>
                    <img src="/images/Returns.png" alt='' />
                </div>
                <div className={Style.col_content}>
                    <span className={Style.content_title}>
                        EASY RETURNS
                    </span>
                    <span className={Style.content_text}>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        Sed ut perspiciatis unde omnis iste natus error sit
                    </span>
                </div>
            </div>
            <div className={Style.banner_col}>
                <div className={Style.col_icon}>
                    <img src="/images/Choıce.png" alt='' />
                </div>
                <div className={Style.col_content}>
                    <span className={Style.content_title}>
                        WIDE CHOICE
                    </span>
                    <span className={Style.content_text}>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        Sed ut perspiciatis unde omnis iste natus error sit
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Banner_two