import type { AppProps } from 'next/app'
import client from '@/utils/apollo-client'
import { ApolloProvider } from '@apollo/client'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>)
}