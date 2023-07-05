import { useEffect, useState } from 'react'
import Style from './style.module.css'
import Link from 'next/link'
import axios from 'axios';
import { useRouter } from 'next/router'
//component
import Page_detail from '../../components/page_detail_header';

const Login_Page = () => {
    const router = useRouter()

    const [state, setState] = useState({
        e_posta: "",
        password: "",
        isChecked: false
    })

    useEffect(() => {
        setState({
            e_posta: localStorage.getItem('e_posta'),
            isChecked: localStorage.getItem('Remember')
        })
    }, [])


    const handleSubmit = async () => {
        await axios.post(`${process.env.API_URL}/api/user/login`, {
            e_posta: state.e_posta,
            password: state.password
        }, {
            withCredentials: true
        }).then((result) => {
            if (result.data && result.data.success) {
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
            console.log(err)
        })
    }


    return (
        <div className={Style.wrapper}>
            <Page_detail title="Login" />
            <div className={Style.container}>
                <div className={Style.column}>
                    <div className={Style.title}>
                        Sign in to your account
                    </div>
                    <div className={Style.input_container}>
                        <input onChange={e => setState({ ...state, e_posta: e.target.value })} value={state.e_posta} type='text' placeholder='Email' alt='' />
                        <i class="ri-mail-line"></i>
                    </div>
                    <div className={Style.input_container}>
                        <input onChange={e => setState({ ...state, password: e.target.value })} type='password' placeholder='Password' alt='' />
                        <i class="ri-lock-line"></i>
                    </div>

                    <div className={Style.myCheckbox_container}>
                        <input onChange={() => setState({ ...state, isChecked: !state.isChecked })} checked={state.isChecked} id='checkbox' type="checkbox" alt="" />
                        <label htmlFor='checkbox'>Remember my email on this computer</label>
                    </div>

                    <div onClick={() => handleSubmit()} className={Style.login_button}>
                        LOGIN NOW
                    </div>


                    <div className={Style.forget_container}>
                        <span>Forget</span>
                        <Link href="/" >
                            Username
                        </Link>
                        <Link href="/" >
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
        </div>
    )
}

export default Login_Page