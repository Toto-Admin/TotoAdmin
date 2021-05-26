import {NgModule} from '@angular/core';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule} from 'apollo-angular-link-http';
import { HttpLink } from 'apollo-angular/http';

// import {InMemoryCache} from 'apollo-cache-inmemory';
import { InMemoryCache,ApolloLink } from '@apollo/client/core';

import { setContext } from '@apollo/client/link/context';

const uri = 'http://45.79.111.106:3300/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink) {
    const basic = setContext((operation, context) => ({
        headers: {
          Accept: 'charset=utf-8'
        }
      }));
    
      const auth = setContext((operation, context) => {
        const token = localStorage.getItem('token');
    
        if (token === null) {
          return {};
        } else {
          return {
            headers: {
              Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZV9pZCI6MSwiZmlyc3RfbmFtZSI6IkFkbWluIiwibGFzdF9uYW1lIjoiVG90byIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicGhvbmUiOiI0NTQ1MzQ1MzQ1IiwicGFzc3dvcmQiOiI1Y2FlZmNmOTNmYjY1MzhmNjk3MjQxZWZiODczNGQzY2IwYmRhM2M0NGFhYjhmOWZkM2VlNGQ5OTBkYmU2MGJmIiwiZG9iIjoiMTk5My0xMC0yMSIsImdlbmRlciI6ImZlbWFsZSIsInN0YXR1cyI6ImFjdGl2ZSIsInN0cmlwZV9jdXN0b21lcl9pZCI6bnVsbCwiZmNtX3Rva2VuIjoiIiwiaWF0IjoxNjIxNTc1MjMxLCJleHAiOjE2MjY3NTkyMzF9.pdXTdgZ3AFp4X0L9qRUJusJ5LwO3Th8tPZoEZM7q8rY"
            }
          };
        }
      });
  return {
    link: ApolloLink.from([basic, auth, httpLink.create({ uri })]),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}