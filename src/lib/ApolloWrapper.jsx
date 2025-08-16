"use client"
import { ApolloProvider } from "@apollo/client";
import { client } from './apolloClient'

import React from 'react'

const ApolloWrapper = ({children}) => {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}

export default ApolloWrapper