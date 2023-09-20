import { ApolloClient, InMemoryCache } from "@apollo/client";
import { SERVER_BASE_URL } from "./constants";

const client = new ApolloClient({
  uri: SERVER_BASE_URL,
  cache: new InMemoryCache(),
});

export default client;
