"use client"
import React from 'react'
import { gql, useQuery } from '@apollo/client'
import {data, loading, error} from '@apollo/client'

const GET_COUNTRIES = gql`
query{
    countries{
    code
    name
    capital
    }
}
`


function Main() {
    const {data, loading,error} = useQuery(GET_COUNTRIES)
    if (loading) return <p>Loading...</p>
    if (error) return <p>err</p>
    console.log(data)
    return (
        <div>
            <ul>
                {
                    data.countries.slice(0,10).map((country) => {
                        return <li
                        key={country.code}
                        className='border-b'
                        >
                            <p>this country is: {country.name}</p>
                            <p>and capital is: {country.capital}</p>
                            <p>and code is: {country.code}</p>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Main