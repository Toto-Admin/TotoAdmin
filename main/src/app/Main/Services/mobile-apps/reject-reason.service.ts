import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const Fragments = {
    RejectReasonData: gql`
    fragment RejectReasonData on RejectReason {
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
export class RejectReasonService {

    constructor(private apollo: Apollo) { }

    getRejectReasons(request?: any) {
        return this.apollo.query({
            fetchPolicy: 'no-cache',
            query: gql`
                query getRejectReasons($request: RejectReasonsDataTableInput){
                    data : getRejectReasons( input : $request){
                        meta {
                            total
                        }
                        data {
                        ...RejectReasonData
                        }
                    }
                }
                ${Fragments.RejectReasonData}
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

    addRejectReason(request: any) {
        return this.apollo.mutate({
            mutation: gql`
          mutation saveRejectReason($request: RejectReasonInput!){
              data : saveRejectReason( input: $request){
                  message
                  status
                  data{
                      ...RejectReasonData
                  }
              }
          }
          ${Fragments.RejectReasonData}
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

    deleteRejectReason(id: number) {
        return this.apollo.mutate({
            mutation: gql`
          mutation deleteRejectReason($id:Int!){
              data : deleteRejectReason(id : $id){
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
