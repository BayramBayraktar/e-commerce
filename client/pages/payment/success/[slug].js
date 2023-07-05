import React from 'react'

const Success = ({ response }) => {
    console.log(response)
    return (
        <div>Success</div>
    )
}

export default Success
export async function getServerSideProps(context) {

    const { slug } = context.params
    const fetchData = await fetch(`${process.env.API_URL}/api/chart/clear-to-card/${slug}}`)
    const response = await fetchData.json()
    return {
        props: {
            response
        }
    }
}