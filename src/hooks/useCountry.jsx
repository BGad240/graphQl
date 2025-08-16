"use client"
import React from 'react'
import { GET_COUNTRIES } from '@/_graphql/country.query'
import { useQuery } from '@apollo/client'
 function useCountry() {
    const { data, error, loading } = useQuery(GET_COUNTRIES)
  return (
    {data, error, loading}
  )
}

export default useCountry