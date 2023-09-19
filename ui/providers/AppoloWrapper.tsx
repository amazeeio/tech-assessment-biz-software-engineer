"use client";

import { ApolloProvider } from "@apollo/client";
import client from "@/utils/apollo-client";

interface AppoloWrapperProps {
  children: React.ReactNode;
}

export function AppoloWrapper({ children }: AppoloWrapperProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
