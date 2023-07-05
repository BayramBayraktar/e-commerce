import React from 'react'
import Link from 'next/link'
import style from './style.module.css'
/* layout*/
import Layout from '../../../layout/main'


const User_Verify = (props) => {
    const { success, message, e_posta, name } = props.result
    return (
        <Layout>
            <div className={style.wrapper}>
                <div className={style.container}>
                    <div className={style.row}>
                        <div className={style.checked_container}>
                            {
                                success ? <i class="ri-shield-check-line"></i> : <i class="ri-close-fill"></i>
                            }
                        </div>
                        <div className={style.row}>
                            <div className={style.text_container}>
                                {message}
                            </div>
                        </div>
                        <div className={style.row}>
                            <div className={style.column}>
                                <span>{name}</span>
                                <span>{e_posta + ' ' + message}</span>
                            </div>
                        </div>
                        <div className={style.row}>
                            {success ?
                                <Link href="/login" >Login</Link>
                                :
                                <Link href="/signin" >Signin</Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default User_Verify;


export async function getServerSideProps(context) {
    let { query } = context
    let response = await fetch(`${process.env.API_URL}/api/user/verify/${query.slug}`)
    let result = await response.json()

    return {
        props: {
            result
        },
    }
}