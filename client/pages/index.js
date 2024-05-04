import React from 'react'
//layout 
import Layout from '../layout/main'
//content
import Content from '../container/Home'

const Home_Page = () => {
  return (
    <Layout title={'e-commerce'}>
      <Content />
    </Layout>
  )
}

export default Home_Page