import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map, catchError } from 'rxjs/operators';
export const Fragments = {
  ReferralData: gql`
  fragment ReferralData on Referral {
      id
      userId
      referralId
      referral_used
      user_used
      created_at
      updated_at
      user{
          id
          first_name
          last_name
          email
          role_id
          password
          dob
          profile_pic
          gender
          status
          referral_code
      }
      referral{
          id
          first_name
          last_name
          email
          role_id
          password
          dob
          profile_pic
          gender
          status
          referral_code
      }
      referralJob{
          id
          title
      }
      userJob{
          id
          title
      }
  }
`,
}
@Injectable({
  providedIn: 'root'
})
export class EmailTemplateService {

  constructor(private apollo: Apollo) { }

  //Get all email template data
  get(request: any) {
    return this.apollo.query({
      fetchPolicy: 'no-cache',
      query: gql`
                query emailTemplates($request: EmailTemplateDataTableInput){
                    data : emailTemplates(input: $request){
                        meta{
                            total
                        }
                        data {
                            _id
                            name
                            slug
                            subject
                            body
                            created_at
                            updated_at
                        }
                    }
                }
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

  delete(id: string) {
    return this.apollo.mutate({
      mutation: gql`
            mutation deleteEmailTemplate($id: String!){
                data : deleteEmailTemplate(id: $id){
                    message
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


  add(request: any) {
    return this.apollo.mutate({
      mutation: gql`
            mutation addEmailTemplate($request: EmailTemplateInput!){
                data : addEmailTemplate( input: $request){
                    message
                    data
                }
            }
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


  getReferrals(request: any) {
    return this.apollo.query({
      fetchPolicy: 'no-cache',
      query: gql`
                query getReferrals($request:ReferralDataTableInput){
                    data : getReferrals( input : $request){
                        meta {
                            total
                        }
                        data {
                        ...ReferralData
                        }
                    }
                }
                ${Fragments.ReferralData}
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
