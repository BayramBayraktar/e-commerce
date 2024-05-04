import { useState } from 'react'
import Style from './style.module.css'
import axios from 'axios'
import { useMutation } from '@apollo/client'
import { ADD_USER } from '../../graphQl/Mutations'
import { motion } from 'framer-motion'
//component
import Page_detail_header from '../../components/page_detail_header'


const Signin_page = () => {
    const [AddnewUser, { loading, error, data }] = useMutation(ADD_USER);

    const [state, setState] = useState({
        name: "",
        password: "",
        password_1: "",
        e_posta: "",
        phone_number: "",
        location: "",
        isChacked: false,
        password_valid: false,
        checbox_valid: false,
        message: "",
        success: false
    });


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (state.isChacked) {
            setState({ ...state, checbox_valid: false })
        } else {
            setState({ ...state, checbox_valid: true })
        }

        if (state.password !== state.password_1) {
            setState({ ...state, password_valid: true })
        } else {
            setState({ ...state, password_valid: false })
        }

        if (state.isChacked == true && state.name !== "" && state.password === state.password_1 && state.e_posta !== "" && state.phone_number !== "" && state.location !== "") {
            /*  const result = await AddnewUser({
                 variables: {
                     name: state.name,
                     phone_number: state.phone_number,
                     e_posta: state.e_posta,
                     password: state.password,
                     location: state.location,
                 },
             });
  */


            await axios.post(`${process.env.API_URL}/api/user/signin`, {
                name: state.name,
                password: state.password,
                e_posta: state.e_posta,
                phone_number: state.phone_number,
                location: state.location
            }).then((result) => {
                setState({ ...state, message: result.data.message, success: result.data.success })
            }).catch((err) => {
                const result = err.response
                setState({ ...state, message: result.data.message, success: result.data.success })
            });
        }

    }
    return (
        <motion.div
            className={Style.wrapper}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
        >
            <Page_detail_header title='SIGN IN' />
            <div className={Style.container}>
                <div className={Style.column}>
                    <div className={Style.title}>Welcome to .....</div>
                    <div className={Style.text_container}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis eu mi et pellentesque.
                        Curabitur vestibulum convallis orci, quis dapibus elit fringilla eget. Suspendisse posuere diam ut erat convallis, non dictum quam luctus.
                    </div>

                    <div className={Style.list_items_container}>
                        <div className={Style.list_item}>
                            <i class="ri-check-line"></i>
                            <span>
                                Fusce viverra nisl eu nisl suscipit dictum.
                            </span>
                        </div>

                        <div className={Style.list_item}>
                            <i class="ri-check-line"></i>
                            <span>
                                Fusce viverra nisl eu nisl suscipit dictum.
                            </span>
                        </div>
                        <div className={Style.list_item}>
                            <i class="ri-check-line"></i>
                            <span>
                                Fusce viverra nisl eu nisl suscipit dictum.
                            </span>
                        </div>
                        <div className={Style.list_item}>
                            <i class="ri-check-line"></i>
                            <span>
                                Fusce viverra nisl eu nisl suscipit dictum.
                            </span>
                        </div>
                        <div className={Style.list_item}>
                            <i class="ri-check-line"></i>
                            <span>
                                Fusce viverra nisl eu nisl suscipit dictum.
                            </span>
                        </div>
                        <div className={Style.banner_container}>
                            <div className={Style.banner_item}></div>
                            <div className={Style.banner_item}></div>
                            <div className={Style.banner_item}></div>
                            <div className={Style.banner_item}></div>
                            <div className={Style.banner_item}></div>
                            <div className={Style.banner_item}></div>
                        </div>
                    </div>
                </div>
                <div className={Style.column}>
                    <div className={Style.title}>Create an Account</div>
                    <form onSubmit={handleSubmit} className={Style.input_wrapper}>
                        <div className={Style.input_container}>
                            <input onChange={e => setState({ ...state, e_posta: e.target.value })} pattern="[^@\s]+@[^@\s]+\.[^@\s]+" value={state.e_posta} type='email' alt='email_input' placeholder='Email' />
                            <i class="ri-mail-line"></i>
                        </div>
                        <div className={Style.input_container}>
                            <input onChange={e => setState({ ...state, password: e.target.value })} value={state.password} minLength="7" type='password' alt='Password' placeholder='Password' />
                            <i class="ri-lock-fill"></i>
                        </div>
                        <div className={`${Style.input_container} ${state.password_valid && Style.password_border}`}>
                            <input onChange={e => setState({ ...state, password_1: e.target.value })} value={state.password_1} type='password' alt='Password' placeholder='Confirm Password' />
                            <i class="ri-lock-fill"></i>
                        </div>
                        <div className={Style.input_container}>
                            <input onChange={e => setState({ ...state, phone_number: e.target.value })} pattern="[0-9]{11}" maxlength="11" value={state.phone_number} type='tel' alt='pohene_number' placeholder='Phone Number' />
                            <i class="ri-smartphone-line"></i>
                        </div>
                        <div className={Style.input_container}>
                            <input onChange={e => setState({ ...state, location: e.target.value })} value={state.location} type='text' alt='Location' placeholder='Location' />
                            <i class="ri-map-pin-line"></i>
                        </div>
                        <div className={Style.input_container}>
                            <input onChange={e => setState({ ...state, name: e.target.value })} value={state.name} type='text' alt='Name' placeholder='Name' />
                            <i class="ri-user-fill"></i>
                        </div>
                        <div className={Style.checkbox_container}>
                            <input onChange={e => setState({ ...state, isChacked: !state.isChacked })} checked={state.isChacked} required id='checkbox' type='checkbox' alt='' />
                            <label htmlFor='checkbox'>I agree to the terms of use</label>
                        </div>
                        <span className={state.success ? Style.success_message : Style.unsuccess_message}>{state.message}</span>

                        <button type='submit' className={Style.submit_button}>
                            SING UP NOW
                        </button>

                    </form>
                </div>
            </div>
        </motion.div >
    )
}

export default Signin_page