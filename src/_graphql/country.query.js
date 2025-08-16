import { gql } from "@apollo/client";

export const GET_COUNTRIES= gql`
query{
    countries{
    name
    code
    capital
    }
}
`


export const GET_COUNTRY= gql`
query GetCountry($code: ID!) {
  country(code: $code) {
    code
    name
    capital
    currency
    emoji
    languages {
      code
      name
    }
  }
}
`



