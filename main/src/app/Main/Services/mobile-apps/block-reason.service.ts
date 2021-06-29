import { Injectable } from '@angular/core';
import {Apollo,gql} from 'apollo-angular';
import {map, catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';

export const Fragments = {
  DisputeReasonData: gql`
  fragment DisputeReasonData on DisputeReason {
      id
      reason
      status
      created_at
      updated_at
  }
  `,
}
@Injectable({ 
  providedIn: 'root'
})
export class BlockReasonService {

  constructor(private apollo: Apollo) { }

  getBlockReasons(request?: any) {
    return this.apollo.query({
        fetchPolicy: 'no-cache',
        query: gql`
                query getBlockReasons($request: DisputeReasonsDataTableInput){
                    data : getBlockReasons( input : $request){
                        meta {
                            total
                        }
                        data {
                        ...DisputeReasonData
                        }
                    }
                }
                ${Fragments.DisputeReasonData}
            `,
        variables: {
            request
        }
    })
        .pipe(
            map((resp: any) => {
                return resp.data.data;
            }),
            catchError((error) => {
                return throwError(JSON.parse(JSON.stringify(error)));
            })
        )
        .toPromise()
        .then((data: any) => {
            return data;
        }).catch((error) => {
            error = ((error.graphQLErrors && error.graphQLErrors[0]) ? error.graphQLErrors[0] : error);
            throw error;
        })
}

addBlockReason(request: any) {
  return this.apollo.mutate({
      mutation: gql`
          mutation saveBlockReason($request: DisputeReasonInput!){
              data : saveBlockReason( input: $request){
                  message
                  status
                  data{
                      ...DisputeReasonData
                  }
              }
          }
          ${Fragments.DisputeReasonData}
      `,
      variables: {
          request
      }
  })
      .pipe(
          map((resp: any) => {
              return resp.data.data;
          }),
          catchError((error) => {
              return throwError(JSON.parse(JSON.stringify(error)));
          })
      )
      .toPromise()
      .then((data: any) => {
          return data;
      }).catch((error) => {
          error = ((error.graphQLErrors && error.graphQLErrors[0]) ? error.graphQLErrors[0] : error);
          throw error;
      })
}

deleteBlockReason(id: number) {
  return this.apollo.mutate({
      mutation: gql`
          mutation deleteBlockReason($id:Int!){
              data : deleteBlockReason(id : $id){
                  message
                  status
              }
          }
      `,
      variables: {
          id
      }

  })
      .pipe(
          map((resp: any) => {
              return resp.data.data;
          }),
          catchError((error) => {
              return throwError(JSON.parse(JSON.stringify(error)));
          })
      )
      .toPromise()
      .then((data: any) => {
          return data;
      }).catch((error) => {
          error = ((error.graphQLErrors && error.graphQLErrors[0]) ? error.graphQLErrors[0] : error);
          throw error;
      })
}
 

}
