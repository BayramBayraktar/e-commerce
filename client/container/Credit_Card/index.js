import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Style from './style..module.css'
import Card from '../../components/Credit_Card'
import { Field, Form } from 'react-final-form'
import { motion } from 'framer-motion'
import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate
} from '../../components/Credit_Card/cardUtils.js'
import { calculateTotalPrice } from '../../utils/calculateTotal.js'


const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const CreditCard = ({ setActiveMenu }) => {

    const { card } = useSelector((state) => state.CurrentUser)


    useEffect(() => {
        if (!window.document.getElementById("stripe-script")) {
            var s = window.document.createElement("script");
            s.id = "stripe-script";
            s.type = "text/javascript";
            s.src = "https://js.stripe.com/v2/";
            s.onload = () => {
                window["Stripe"].setPublishableKey(
                    "pk_test_51NJJueLhU6SAQ9hsaqIDYDA1i1DxFm5pRHILkzu56NtQmqCqhimVdGf969oqp84C5YRlKJL84E59MjXBPprhk2Pi00lsOOGMC3"
                );
            };
            window.document.body.appendChild(s);
        }
    }, []);

    const onSubmit = async (values) => {
        await sleep(300);
        try {
            window.Stripe.card.createToken(
                {
                    number: values.number,
                    exp_month: values.expiry.split("/")[0],
                    exp_year: values.expiry.split("/")[1],
                    cvc: values.cvc,
                    name: values.name,
                },
                (status, response) => {
                    if (status === 200) {
                        axios.post(`${process.env.API_URL}/api/card/create-checkout-session`, {
                            token: response,
                            amount: calculateTotalPrice(card),
                        })
                            .then((response) => {
                                if (response.data.status == "succeeded") {
                                    setActiveMenu('successful-menu')
                                }
                            })
                            .catch((err) => {
                                setActiveMenu('unsuccessful-menu')
                            });
                    } else {
                        console.log(response.error.message);
                    }
                }
            );
        } catch (error) { }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
        >
            <Form
                onSubmit={onSubmit}
                render={({
                    handleSubmit,
                    form,
                    submitting,
                    pristine,
                    values,
                    active,
                }) => {
                    return (

                        <form className={Style.cardContainer} onSubmit={handleSubmit}>
                            <Card
                                number={values.number || ""}
                                name={values.name || ""}
                                expiry={values.expiry || ""}
                                cvc={values.cvc || ""}
                                focused={active}
                            />
                            <div>
                                <Field
                                    name="number"
                                    component="input"
                                    type="text"
                                    pattern="([0-9\s]{19,25})|([0-9\s]{17})"
                                    placeholder="Card Number"
                                    format={formatCreditCardNumber}
                                    className={Style.cardInput}
                                    required
                                />
                            </div>
                            <div>
                                <Field
                                    name="name"
                                    component="input"
                                    type="text"
                                    placeholder="Name"
                                    pattern="[a-zA-Z]{3,}"
                                    className={Style.cardInput}
                                    required

                                />
                            </div>
                            <div className={Style.row}>
                                <Field
                                    name="expiry"
                                    component="input"
                                    type="text"
                                    pattern="\d\d/\d\d"
                                    placeholder="Valid Thru"
                                    format={formatExpirationDate}
                                    className={Style.cardInput}
                                    required
                                />
                                <Field
                                    name="cvc"
                                    component="input"
                                    type="text"
                                    pattern="\d{3,4}"
                                    placeholder="CVC"
                                    format={formatCVC}
                                    className={Style.cardInput}
                                    required
                                />
                            </div>
                            <div className={Style.buttons}>
                                <button type="submit" disabled={Object.keys(values).length !== 4}>
                                    PAY
                                </button>
                            </div>
                        </form>
                    );
                }}
            />
        </motion.div >
    );
}

export default CreditCard