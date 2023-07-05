import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import StyleHeader from './style.module.css'
import jwt from 'jsonwebtoken'
import OutsideClickHandler from 'react-outside-click-handler'
//redux
import { useSelector, useDispatch } from 'react-redux'
import { setcurrentUser } from '../../Store/CurrentUserSlice'
import { setCard } from '../../Store/CurrentUserSlice'
//components
import Shopping_card from '../shopping_card'
import Header_Navigator from '../Header_navigator'


const Header = () => {
    const dispatch = useDispatch()
    const { token, currentUser, card } = useSelector((state) => state.CurrentUser)
    const [Shoping_card_visibility, setShoping_card_visibility] = useState()
    const [User_DropDown_visibility, setUser_DropDown_visibility] = useState(false)

    useEffect(() => {
        if (token) {
            const decoded = jwt.decode(token)
            dispatch(setcurrentUser(decoded))
        }
    }, [token])

    useEffect(() => {
        const fetchShoppingCard = async () => {
            const response = await axios.get(`${process.env.API_URL}/api/card/getshopingcard`, { withCredentials: true });
            const { products } = response.data;
            dispatch(setCard(products));
        }
        fetchShoppingCard()
    }, [currentUser])


    const Logout = async () => {
        // withCredentials will remain true because it is communicating with a different server
        await axios.get(`${process.env.API_URL}/api/user/logout`, { withCredentials: true }).then((response) => {
            const { data } = response
            if (data.success) {
                window.location.href = `http://localhost:3000`
            }
        })
    }

    return (
        <header className={StyleHeader.header}>
            <div className={StyleHeader.row}>
                <div className={StyleHeader.col}>
                    <div className={StyleHeader.Brand}>
                        <Link href="/">
                            BRAND
                        </Link>
                    </div>
                    <div className={StyleHeader.medium_size_screen}>
                        <Header_Navigator />
                    </div>
                </div>
                <div className={StyleHeader.col}>
                    <div className={StyleHeader.options}>
                        <div className={StyleHeader.lang}>
                            <select>
                                <option value="En" >En</option>
                                <option value="Tr">Tr</option>
                                <option value="Kw">Kw</option>
                            </select>
                        </div>
                        <div className={StyleHeader.currency}>
                            <select >
                                <option value="Us" >Us</option>
                                <option value="Tr">Tr</option>
                                <option value="Kw">Kw</option>
                            </select>
                        </div>
                    </div>

                    <div className={StyleHeader.icons}>
                        <div className={StyleHeader.search}>
                            <Link href='/search'>
                                <i class="ri-search-eye-line"></i>
                            </Link>
                        </div>
                        <div onClick={() => setUser_DropDown_visibility(true)} className={StyleHeader.user}>
                            {Object.keys(currentUser).length != 0 ? <img src={currentUser?.User?.profilePicture} alt='' /> : <i class="ri-user-3-line"></i>}

                            {Object.keys(currentUser).length != 0 ?
                                User_DropDown_visibility && <OutsideClickHandler onOutsideClick={() => setUser_DropDown_visibility(false)}>
                                    <Link href="/Profile" >Profile</Link>
                                    <Link href="/setting" >Setting</Link>
                                    <a onClick={() => Logout()}>Logout</a>
                                </OutsideClickHandler>
                                :
                                User_DropDown_visibility && <OutsideClickHandler onOutsideClick={() => setUser_DropDown_visibility(false)}>
                                    <Link href="/login" >Login</Link>
                                    <Link href="/signin" >Signin</Link>
                                </OutsideClickHandler>
                            }

                        </div>
                        <div className={StyleHeader.like}> <span className={StyleHeader.element}>1</span> <i class="ri-heart-line"></i></div>
                        <div onClick={() => setShoping_card_visibility(true)} className={StyleHeader.shoping_bag}>
                            <span className={StyleHeader.element}>{card && card.length > 0 ? card?.length : 0}</span> <i class="ri-shopping-bag-2-line"></i></div>
                    </div>
                </div>
            </div>
            <div className={StyleHeader.Small_size_screen}>
                <Header_Navigator />
            </div>
            <Shopping_card current={currentUser?.User} visibility={Shoping_card_visibility} setVisibility={setShoping_card_visibility} />
        </header >
    )
}

export default Header