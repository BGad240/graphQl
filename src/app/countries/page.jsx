"use client"
import React from 'react'
import useCountry from '@/hooks/useCountry'
import CountryList from '@/components/CountryList'
function Country() {
  const { data, error, loading } = useCountry()
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <CountryList countries={data.countries.slice(0, 9)} />;
}

export default Country