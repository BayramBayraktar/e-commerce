import React from 'react'
import Head from 'next/head'

//component
import Header from '../components/header'
import Footer from '../components/footer'

const Main = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Main