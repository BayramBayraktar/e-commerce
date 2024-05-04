import React from 'react'
import Layout from '../../../layout/main'

//containers
import NewPasswordPage from '../../../container/newPassword'

const NewPassword = () => {


    return (
        <Layout title={"New password"} >
            <NewPasswordPage />
        </Layout>
    )
}

export default NewPassword


export const getServerSideProps = async (contex) => {
    const token = contex.params._

    if (!token) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    return {
        props: {}
    }
}

