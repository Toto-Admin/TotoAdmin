import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map, catchError } from 'rxjs/operators';

export const Fragments = {
  Payment: gql`
      fragment Payment  on Payment {
          id
          userId
          amount
          jobId
          description
          amount
          payment_gateway_id
          payment_gateway_type
          card_type
          data
          type
          created_at
          job{
              id
              title
              status
              user{
                  id
                  first_name
                  last_name
                  
              }
              provider{
                  id
                  first_name
                  last_name
              }
              service{
                  id 
                  name
              }
          }

      }
  `
};
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private apollo: Apollo) { }

  
  getAllPayments(request: any) {
    return this.apollo.query({
        fetchPolicy: 'no-cache',
        query: gql`
                query getPayments($request: PaymentsDataTableInput){
                    data : getPayments( input : $request){
                        meta {
                            total
                        }
                        data {
                        ...Payment
                        }
                    }
                }
                ${Fragments.Payment}
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
