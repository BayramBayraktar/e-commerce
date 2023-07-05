import React from 'react'
import Link from 'next/link'

import Style from './style.module.css'

const Footer = () => {
    return (
        <div className={Style.container}>
            <div className={Style.column_15}>
                <div className={Style.col_content}>
                    <span>© 2014 Arvi Theme.</span>
                    <span>Made with love <div className={Style.mark}>HezyTheme</div></span>
                </div>
            </div>
            <div className={`${Style.column_45}`}>
                <div className={Style.col_title}>CATEGORIEST</div>
                <div className={Style.col_content}>
                    <Link href="/" className={Style.item} >Accessories</Link>
                    <Link href="/" className={Style.item} >Alcohol</Link>
                    <Link href="/" className={Style.item} >Art</Link>
                    <Link href="/" className={Style.item} >Books</Link>
                    <Link href="/" className={Style.item} >Drink</Link>
                    <Link href="/" className={Style.item} >Electronics</Link>
                    <Link href="/" className={Style.item} >Flowers & Plants</Link>
                    <Link href="/" className={Style.item} >Food</Link>
                    <Link href="/" className={Style.item} >Gadgets</Link>
                    <Link href="/" className={Style.item} >Garden</Link>
                    <Link href="/" className={Style.item} >Grocery</Link>
                    <Link href="/" className={Style.item} >Home</Link>
                    <Link href="/" className={Style.item} >Jewelry</Link>
                    <Link href="/" className={Style.item} >Kids & Baby</Link>
                    <Link href="/" className={Style.item} >Men's Fashion</Link>
                    <Link href="/" className={Style.item} >Mobile</Link>
                    <Link href="/" className={Style.item} >Motorcycles</Link>
                    <Link href="/" className={Style.item} >Movies</Link>
                    <Link href="/" className={Style.item} >Music</Link>
                    <Link href="/" className={Style.item} >Office</Link>
                    <Link href="/" className={Style.item} >Pets</Link>
                    <Link href="/" className={Style.item} >Romantic</Link>
                    <Link href="/" className={Style.item} >Sport</Link>
                    <Link href="/" className={Style.item} >Toys</Link>
                    <Link href="/" className={Style.item} >Travel</Link>
                    <Link href="/" className={Style.item} >Women's Fashion</Link>
                </div>
            </div>
            <div className={Style.column_15}>
                <div className={Style.col_title}>ABOUT</div>
                <div className={Style.col_content}>
                    <Link href="/" className={Style.item}>About us</Link>
                    <Link href="/" className={Style.item}>Delivery</Link>
                    <Link href="/" className={Style.item}>Testimonials</Link>
                    <Link href="/" className={Style.item}>Contact</Link>
                </div>
            </div>
            <div className={Style.column_15}>
                <div className={Style.col_content}>
                    <div className={Style.col_icons}>
                        <Link href="/" className={Style.item}>
                            <img src="./images/facebook.png" alt="" />
                        </Link>
                        <Link href="/" className={Style.item}>
                            <img src="./images/google.png" alt="" />
                        </Link>
                        <Link href="/" className={Style.item}>
                            <img src="./images/twıter.png" alt="" />
                        </Link>
                        <Link href="/" className={Style.item}>
                            <img src="./images/pinterest.png" alt="" />
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer