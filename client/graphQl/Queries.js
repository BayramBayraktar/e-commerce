import { gql } from '@apollo/client'

const GET_USER = gql`
    query User {
       users {
        id
        name
        phone_number
        e_posta
        shoping_card
        favorite
        location
        profilePicture
       }
    }

`

export { GET_USER }