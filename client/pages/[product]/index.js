import React from 'react'
//layou 
import Layout from '../../layout/main'
import Product from '../../container/product'

const index = ({ response, title }) => {

  return (
    <Layout title={title.toUpperCase() + '  -  ES-HOP'} >
      <Product response={response} />
    </Layout>
  )
}
export default index


export const getServerSideProps = async (contex) => {
  const result = await fetch(`${process.env.API_URL}/api/product/${contex?.params?.product}/all`)
    .then((res) => res.json())

  if (!result.success) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      response: result.response,
      title: contex?.params?.product
    }
  }
}

