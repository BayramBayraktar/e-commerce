import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { setCard } from '../../Store/CurrentUserSlice'
import axios from 'axios'
import PopularCss from './style.module.css'
import { ToastContainer, toast } from 'react-toastify';


const Products_Container = (props) => {

    const dispatch = useDispatch()
    const { currentUser, card } = useSelector((state) => state.CurrentUser)
    const [products, setProduct] = useState("")

    useEffect(() => {
        if (props.title === "POPULAR ITEM") {
            axios.get(`${process.env.API_URL}/api/product/allproduct/popular?limit=4`).then((res) => {
                if (res?.data) {
                    setProduct(res?.data)
                }
            })
        }
        if (props.title === "NEW ITEM") {
            axios.get(`${process.env.API_URL}/api/product/allproduct/new?limit=4`).then((res) => {
                if (res?.data) {
                    setProduct(res?.data)
                }
            })
        }
        if (props.title === "Products") {
            axios.get(`${process.env.API_URL}/api/product/allproduct/all?limit=8`).then((res) => {
                if (res?.data) {
                    setProduct(res?.data)
                }
            })
        }
    }, [props])

    const handler_add_to_card = async (product) => {
        await axios.put(`${process.env.API_URL}/api/card/addtocard`, {
            product_id: product._id
        }, { withCredentials: true }).then((response) => {
            const { message, success } = response?.data
            if (success) {
                dispatch(setCard([
                    ...card,
                    {
                        quatitiy: 1, // default number
                        product
                    }
                ]))
                toast.success(message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark'
                });
            } else {
                toast.info(message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark'
                });
            }
        })
    }

    const handler_add_to_favorite = async (value) => {
        const data = { product_id: value, current_id: currentUser?.User._id }

        await axios.put(`${process.env.API_URL}/api/product/favorite`, {
            data
        }).then((res) => console.log(res))
    }

    const truncateTitle = (text, max) => {
        if (text.length <= max) {
            return text
        } else {
            return text.substring(0, max) + '...';
        }
    }


    return products.length !== 0 && (
        <div className={PopularCss.container}>
            <ToastContainer />
            <div className={PopularCss.title}>
                {props.title}
            </div>
            <div className={PopularCss.row}>
                {products.length !== 0 && products.map((product, key) => (
                    <div key={key} className={PopularCss.card}>
                        <img src={`${process.env.API_URL}/Uploads/img/${product.image[0]}`} alt='' />
                        <div className={PopularCss.card_details}>
                            <span className={PopularCss.card_title}>{truncateTitle(product.product_title, 30)}</span>
                            <span className={PopularCss.card_price}>{`${product.product_price} $`}</span>
                        </div>
                        <div className={PopularCss.card_hover_screen}>
                            <span onClick={() => handler_add_to_card(product)} className={PopularCss.add}><i class="ri-add-line"></i></span>
                            <span onClick={() => handler_add_to_favorite(product)} className={PopularCss.heart}><i class="ri-heart-fill"></i></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products_Container