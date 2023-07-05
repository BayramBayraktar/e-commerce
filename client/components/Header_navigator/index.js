import { useState } from 'react'
import Link from 'next/link'
import StyleHeader from './style.module.css'

const Header_Navigator = () => {

    const [Categories_visibility, setCategories_visibility] = useState()


    return (
        <div className={StyleHeader.navigator}>
            <li onMouseLeave={() => setCategories_visibility(false)} onMouseEnter={() => setCategories_visibility(true)} className={`${StyleHeader.item}  ${Categories_visibility && StyleHeader.item_active}`}>
                <Link href='/categories'>CATEGORIES <i class="ri-arrow-down-s-fill"></i></Link>
                {Categories_visibility &&
                    <div className={StyleHeader.Categorıes}>
                        <div className={StyleHeader.Categorıes_Content}>
                            <div className={`${StyleHeader.column_45} ${StyleHeader.Col_diffrent}`}>
                                <div className={StyleHeader.Categories_title}>
                                    PRODUCT CATEGORIES
                                </div>
                                <div className={StyleHeader.col_content}>
                                    <Link href="/" >Accessories</Link>
                                    <Link href="/" >Alcohol</Link>
                                    <Link href="/" >Art</Link>
                                    <Link href="/" >Books</Link>
                                    <Link href="/" >Drink</Link>
                                    <Link href="/" >Electronics</Link>
                                    <Link href="/" >Flowers & Plants</Link>
                                    <Link href="/" >Food</Link>
                                    <Link href="/" >Garden</Link>
                                    <Link href="/" >Grocery</Link>
                                    <Link href="/" >Home</Link>
                                    <Link href="/" >Jewelry</Link>
                                    <Link href="/" >Kids & Baby</Link>
                                    <Link href="/" >Men's Fashion</Link>
                                    <Link href="/" >Mobile</Link>
                                    <Link href="/" >Motorcycles</Link>
                                    <Link href="/" >Movies</Link>
                                    <Link href="/" >Music</Link>
                                    <Link href="/" >Office</Link>
                                    <Link href="/" >Pets</Link>
                                    <Link href="/" >Romantic</Link>
                                    <Link href="/" >Sport</Link>
                                    <Link href="/" >Toys</Link>
                                </div>
                            </div>
                            <div className={StyleHeader.column_30}>
                                <div className={StyleHeader.Categories_title}>
                                    Sale
                                </div>
                                <div className={StyleHeader.col_content}>
                                    <Link href="/" >Accessories</Link>
                                    <Link href="/" >Alcohol</Link>
                                    <Link href="/" >Art</Link>
                                    <Link href="/" >Books</Link>
                                    <Link href="/" >Drink</Link>
                                    <Link href="/" >Electronics</Link>
                                    <Link href="/" >Flowers & Plants</Link>
                                    <Link href="/" >Food</Link>
                                    <Link href="/" >Toys</Link>
                                    <Link href="/" >Travel</Link>
                                    <Link href="/" >Women's Fashion</Link>

                                </div>
                            </div>
                            <div className={StyleHeader.column}>
                                <div className={StyleHeader.col_content}>
                                    <img src="" alt='' className={StyleHeader.Categories_banner} />
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </li>
            <Link href='/about' className={StyleHeader.item}>ABOUT</Link>
            <Link href='/contact' className={StyleHeader.item}>CONTACT</Link>
        </div>
    )
}

export default Header_Navigator