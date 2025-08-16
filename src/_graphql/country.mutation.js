import {gql, useMutation} from "@apollo/client"

const ADD_COUNTRY_MUTATION = gql`
    mutaition addCountry($code: ID!, $name: string!){
        addCountry(code: $code, name: $name){
            code
            name
        }
    }
`