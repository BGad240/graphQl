"use client";
import { useParams } from "next/navigation";
import { useQuery } from "@apollo/client";
import { GET_COUNTRY } from "@/_graphql/country.query";
import CountryDetails from "@/components/CountryDetails";
export default function Country() {
  const {code} = useParams()
  const {data, loading, error} = useQuery(GET_COUNTRY,{
    variables: {code: code}
  })
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
const country = data.country

  return (
    <CountryDetails country={country}/>
  );
}
