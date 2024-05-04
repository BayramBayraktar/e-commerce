import { useEffect, useState } from 'react'
import Style from './style.module.css'
import Link from 'next/link'
import axios from 'axios';
import { useRouter } from 'next/router'
import { motion } from 'framer-motion';
//component
import Page_detail from '../../components/page_detail_header';

const Login_Page = () => {
    const router = useRouter()

    const [state, setState] = useState({
        e_posta: "",
        password: "",
        isChecked: false,
        message: "",
        success: ""
    })

    useEffect(() => {
        setState({
            e_posta: localStorage.getItem('e_posta'),
            isChecked: localStorage.getItem('Remember')
        })
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault()

        await axios.post(`${process.env.API_URL}/api/user/login`, {
            e_posta: state.e_posta,
            password: state.password
        }, {
            withCredentials: true
        }).then((result) => {

            if (result?.data?.success) {
                setState({ ...state, success: result?.data?.success, message: result?.data?.message })

                if (state.isChecked) {
                    localStorage.setItem("Remember", state.isChecked)
                    localStorage.setItem("e_posta", state.e_posta)
                } else {
                    localStorage.removeItem("e_posta")
                    localStorage.removeItem("Remember")
                }
                window.location.href = "/"

            }
        }).catch((err) => {
            const result = err?.response
            console.log(err)
            if (result?.data?.message) {
                setState({ ...state, success: result.data.success, message: result.data.message })
            }

        })
    }


    return (
        <motion.div
            className={Style.wrapper}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
        >
            <Page_detail title="Login" />
            <div className={Style.container}>
                <div className={Style.column}>
                    <form className={Style.formGap} onSubmit={handleSubmit}>
                        <div className={Style.title}>
                            Sign in to your account
                        </div>
                        <div className={Style.input_container}>
                            <input onChange={e => setState({ ...state, e_posta: e.target.value })} value={state.e_posta} required type='text' placeholder='Email' alt='' />
                            <i class="ri-mail-line"></i>
                        </div>
                        <div className={Style.input_container}>
                            <input onChange={e => setState({ ...state, password: e.target.value })} type='password' placeholder='Password' required alt='' />
                            <i class="ri-lock-line"></i>
                        </div>

                        <div className={Style.myCheckbox_container}>
                            <input onChange={() => setState({ ...state, isChecked: !state.isChecked })} checked={state.isChecked} id='checkbox' type="checkbox" alt="" />
                            <label htmlFor='checkbox'>Remember my email on this computer</label>
                        </div>

                        <div style={state.success ? { color: 'green' } : { color: 'red' }}>
                            {state.message}
                        </div>

                        <input type='submit' value="LOGIN NOW" className={Style.login_button} />
                    </form>



                    <div className={Style.forget_container}>
                        <span>Forget</span>
                        <Link href="/forget/password">
                            Password?
                        </Link>
                    </div>
                </div>

                {/* SOLİD */}
                <div className={Style.Solid}></div>

                <div className={Style.column}>
                    <div className={Style.list_item_container}>
                        <i class="ri-key-2-fill"></i>
                        <div className={Style.list_item_right}>
                            <div className={Style.list_item_title}>you don't have a on account </div>
                            <div className={Style.list_item_redirect_container}>
                                <Link href='/' >
                                    Sign up now
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className={Style.list_item_container}>
                        <i class="ri-lock-2-line"></i>
                        <div className={Style.list_item_right}>
                            <div className={Style.list_item_title}>Forgot your account</div>
                            <div className={Style.list_item_redirect_container}>
                                <Link href='/' >
                                    Username
                                </Link>
                                <Link href='/' >
                                    Password
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className={Style.list_item_container}>
                        <i class="ri-global-line"></i>
                        <div className={Style.list_item_right}>
                            <div className={Style.list_item_title}>You have questions</div>
                            <div className={Style.list_item_redirect_container}>
                                <Link href='/' >
                                    Support contact
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </motion.div >
    )
}

export default Login_Page