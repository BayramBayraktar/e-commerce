import React from 'react'

//layout 
import Layout from '../layout/main'
//component
import Note_Found from '../container/Note_Found'

const Page_404 = () => {
    return (
        <Layout title="404 - Oops!">
            <Note_Found />
        </Layout>
    )
}

export default Page_404