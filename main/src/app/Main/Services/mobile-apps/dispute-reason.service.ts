import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, catchError } from 'rxjs/operators';
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
export class DisputeReasonService {

  constructor(private apollo: Apollo) { }


  getDisputeReasons(request?: any) {
    return this.apollo.query({
      fetchPolicy: 'no-cache',
      query: gql`
                query getDisputeReasons($request: DisputeReasonsDataTableInput){
                    data : getDisputeReasons( input : $request){
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
  
  addDisputeReason(request: any) {
    return this.apollo.mutate({
      mutation: gql`
          mutation saveDisputeReason($request: DisputeReasonInput!){
              data : saveDisputeReason( input: $request){
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

  deleteDisputeReason(id: number) {
    return this.apollo.mutate({
      mutation: gql`
          mutation deleteDisputeReason($id:Int!){
              data : deleteDisputeReason(id : $id){
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
