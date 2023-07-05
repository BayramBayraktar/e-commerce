import React from 'react'

//layout 
import Layout from '../../layout/main'
//container
import Login_Page from '../../container/login'

const Login = () => {
    return (
        <Layout title='Login' >
            <Login_Page />
        </Layout>
    )
}

export default Login