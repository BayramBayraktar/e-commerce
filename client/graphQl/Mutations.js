import { gql } from '@apollo/client'


const ADD_USER = gql`
    mutation AddnewUser(
        $name: String!,
        $phone_number: String!,
        $e_posta: String!,
        $password: String!,
        $location: String!
        ){
        AddnewUser(
            name: $name,
            phone_number: $phone_number,
            e_posta: $e_posta,
            password: $password,
            location: $location
            ) {
            name
            e_posta
        }
    }

`

export { ADD_USER }