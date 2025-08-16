"use client";
import { useParams } from "next/navigation";
import { useQuery } from "@apollo/client";
import { GET_COUNTRY } from "@/_graphql/country.query";
import CountryDetails from "@/components/CountryDetails";
import LoadingPage from "@/components/LoadingPage";
import ErrorPage from "@/components/ErrorPage";
export default function Country() {
  const {code} = useParams()
  const {data, loading, error} = useQuery(GET_COUNTRY,{
    variables: {code: code}
  })
  if (loading) return <LoadingPage/>;
  if (error) return <ErrorPage/>;
const country = data.country

  return (
    <CountryDetails country={country}/>
  );
}
