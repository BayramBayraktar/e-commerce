import React, { useState } from "react";
import styles from './style.module.css'
import axios from "axios";
import { useRouter } from 'next/router'

const New_Password = () => {

    const router = useRouter()
    const [state, setState] = useState({
        password1: "",
        password2: "",
        message: "",
        success: null
    })
    const handlerSubmit = async (e) => {
        e.preventDefault()

        if (state.password1 !== state.password2) {
            setState({ ...state, message: 'please check the password', success: false })
        } else if (state.password1 === state.password2) {
            await axios.post(`${process.env.API_URL}/api/user/forget/newPassword/${router.query._}`, { newpassword: state.password1 })
                .then((response) => {
                    setState({ ...state, message: response.data.message, success: response.data.success })
                }).catch((err) => {
                    const { response } = err
                    setState({ ...state, message: response.data.message, success: response.data.success })
                })

        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                please enter your email
            </div>
            <form onSubmit={handlerSubmit} className={styles.row}>
                <div className={styles.input_container}>
                    <input onChange={(e) => setState({ ...state, password1: e.target.value })} name="password1" type='password' placeholder='new password' alt='new password' />
                    <i class="ri-lock-line"></i>
                </div>
                <div className={styles.input_container}>
                    <input onChange={(e) => setState({ ...state, password2: e.target.value })} name="password2" type='password' placeholder='again enter new password' alt='again enter new password' />
                    <i class="ri-lock-line"></i>
                </div>

                <button type="submit" className={styles.button}>
                    Create new Password
                </button>
            </form>
            <p style={state.success ? { color: 'green' } : { color: 'red' }}>{state.message}</p>
        </div>
    )
}

export default New_Password