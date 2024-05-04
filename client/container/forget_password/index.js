import React, { useState } from "react";
import styles from './style.module.css'
import axios from "axios";

const Forget_Password = () => {

    const [state, setState] = useState({
        email: "",
        message: "",
        success: null
    })


    const handlerSubmit = async (e) => {
        e.preventDefault()

        await axios.post(`${process.env.API_URL}/api/user/forget/password`, { email: state.email })
            .then((response) => {
                setState({ ...state, message: response.data.message, success: response.data.success })
            }).catch((err) => {
                const { response } = err
                setState({ ...state, message: response.data.message, success: response.data.success })
            })

    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                please enter your email
            </div>
            <form onSubmit={handlerSubmit} className={styles.row}>
                <div className={styles.input_container}>
                    <input onChange={(e) => setState({ ...state, email: e.target.value })} pattern="[^@\s]+@[^@\s]+\.[^@\s]+" type='text' placeholder='Email' alt='' />
                    <i class="ri-mail-line"></i>
                </div>

                <button type="submit" className={styles.login_button}>
                    Send verification code to my email
                </button>
            </form>
            <p className={state.success ? styles.messageSuccess : styles.messageUnSuccess} >{state.message}</p>
        </div>
    )
}

export default Forget_Password