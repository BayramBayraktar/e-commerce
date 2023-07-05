import React from 'react'
//layout
import Layout from '../../layout/main'
//continer
import Search_page from '../../container/search'
const Search = () => {
    return (
        <Layout title={'search'} >
            <Search_page />
        </Layout>
    )
}

export default Search