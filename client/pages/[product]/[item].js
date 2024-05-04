import React from 'react'
import Layout from '../../layout/main'
import Product_detail from '../../container/product_detail'

const Product = ({ response }) => {
    return (
        <Layout title={'Product'}>
            <Product_detail cardData={response} />
        </Layout>
    )
}

export default Product


export const getServerSideProps = async (contex) => {
    const result = await fetch(`${process.env.API_URL}/api/product/productdetail/${contex.params.item}`)
        .then((res) => res.json())

    if (!result.success) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            response: result.response
        }
    }
}


