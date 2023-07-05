import React from 'react'
import Link from 'next/link'
import style from './style.module.css'

//component 
import Page_detail_header from '../../components/page_detail_header'
import Banner_2 from '../../components/banner-2'

const Note_Found = () => {
    return (
        <div className={style.wrapper}>
            <Page_detail_header title="404" />
            <div className={style.container}>
                <div className={style.banner}>
                    Oops!
                </div>
                <div className={style.content}>
                    <div className={style.content_title}>
                        Sorry, this page could bot be found!
                    </div>
                    <div className={style.content_text}>
                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                    </div>

                    <Link href='/' className={style.go_back_btn}>Go back to Hompage</Link>

                    <div className={style.search_section}>
                        <label className={style.search_text}>Search our site</label>
                        <div className={style.search_bar}>
                            <input type='text' alt='search our site' placeholder='SEARCH' />
                            <i class="ri-search-2-line"></i>
                        </div>
                    </div>
                </div>
            </div>
            <Banner_2 />
        </div>
    )
}

export default Note_Found