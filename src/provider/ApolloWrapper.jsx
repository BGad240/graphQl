"use client"
import { client } from "@/lib/apolloClient"
import { ApolloProvider } from "@apollo/client"


const ApolloWrapper = ({children}) => {
  return (
    <ApolloProvider client={client}>
        {children}
    </ApolloProvider>
  )
}

export default ApolloWrapper