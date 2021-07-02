import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
export const Fragments = {
  TranspotationData: gql`
        fragment TranspotationData on Transpotations {
            id
            name
            image
            created_at
            updated_at
        }
    `,
}

@Injectable({
  providedIn: 'root'
})
export class TransportService {

  constructor(private apollo: Apollo) { }

  getTranspotationData(request?: any) {
    return this.apollo.query({
      fetchPolicy: 'no-cache',
      query: gql`
                query getTranspotationData($request: TranspotationsDataTableInput){
                    data : getTranspotationData( input : $request){
                        meta {
                            total
                        }
                        data {
                        ...TranspotationData
                        }
                    }
                }
                ${Fragments.TranspotationData}
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

  deleteTranspotations(id: number) {
    return this.apollo.mutate({
      mutation: gql`
            mutation deleteTranspotations($id:Int!){
                data : deleteTranspotations(id : $id){
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

  addTranspotations(request: any) {
    return this.apollo.mutate({
      mutation: gql`
            mutation saveTranspotations($request: TranspotationsInput!){
                data : saveTranspotations( input: $request){
                    message
                    status
                    data{
                        ...TranspotationData
                    }
                }
            }
            ${Fragments.TranspotationData}
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
}
