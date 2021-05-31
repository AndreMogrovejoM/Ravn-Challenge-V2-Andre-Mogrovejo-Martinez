import { 
    HttpLink,
    ApolloClient,
    InMemoryCache
 } from "@apollo/client";

const URI = 'https://swapi-graphql.netlify.app/.netlify/functions/index';

export const client = new ApolloClient({
    cache : new InMemoryCache(),
    link: new HttpLink({
      uri: URI,
    })
});
