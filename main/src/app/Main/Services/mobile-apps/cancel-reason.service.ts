import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const Fragments = {
  ReasonData: gql`
        fragment ReasonData on Reason {
            id
            reason
            type
            status
            created_at
            updated_at
        }
    `,
}
@Injectable({
  providedIn: 'root'
})
export class CancelReasonService {

  constructor(private apollo: Apollo) { }

  getReasons(request?: any) {
    return this.apollo.query({
      fetchPolicy: 'no-cache',
      query: gql`
                query getReasons($request: ReasonsDataTableInput){
                    data : getReasons( input : $request){
                        meta {
                            total
                        }
                        data {
                        ...ReasonData
                        }
                    }
                }
                ${Fragments.ReasonData}
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


  addReason(request: any) {
    return this.apollo.mutate({
      mutation: gql`
            mutation saveReason($request: ReasonInput!){
                data : saveReason( input: $request){
                    message
                    status
                    data{
                        ...ReasonData
                    }
                }
            }
            ${Fragments.ReasonData}
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

  deleteReason(id: number) {
    return this.apollo.mutate({
      mutation: gql`
          mutation deleteReason($id:Int!){
              data : deleteReason(id : $id){
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
