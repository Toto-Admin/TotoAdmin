import { Injectable } from '@angular/core';
import { throwError, Subject } from 'rxjs';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map, catchError } from 'rxjs/operators';

export const Fragments = {
  User: gql`
  fragment User on User {
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
      firebaseId
      stripe_customer_id
      phone
      lat
      long
      country_code
      distance
      created_at
      updated_at
      address
      last_login_at
      register_date
      preference {
          id
          userId
          day
          date
          created_at
          updated_at
          deleted_at
          timeSlotsId
          timeSlots {
              id
              name
              start_time
              end_time
              created_at
              updated_at
              deleted_at
          }
      }
      services {
          id
          userId
          serviceId
          created_at
          updated_at
          deleted_at
      }
      seekerJobs {
          id
          userId
          providerId
          serviceId
          addressId
          promocodeUseId
          type
          title
          special_instruction
          description
          status
          created_at
          updated_at
          deleted_at
          user {
              id
              first_name
              last_name
              email
              role_id
          }
          provider {
              id
              first_name
              last_name
              email
              role_id
          }
          service{
              id
              categoryId
              name
              slug
              image
              description
              duration
              price
              price_type
          }
      }
      transactions {
          id
          userId
          jobId
          description
          amount
          payment_gateway_type
          payment_gateway_id
          data
          type
          created_at
          updated_at
          job {
              id
              userId
              providerId
              serviceId
              addressId
              promocodeUseId
              type
              title
              special_instruction
              description
              status
              created_at
              updated_at
              deleted_at
              service {
                  id
                  categoryId
                  name
                  slug
                  image
                  description
                  duration
                  price
                  price_type
              }
          }
      }
  }
`,
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private apollo: Apollo) { }

  viewUser(id: number) {
    return this.apollo.query({
      fetchPolicy: 'no-cache',
      query: gql`
            query user($id: Int){
                data : user(id : $id){
                    ...User
                }
            }
            ${Fragments.User}
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

  getUserSaleAmount(id: number) {
    return this.apollo.query({
      fetchPolicy: 'no-cache',
      query: gql`
          query userSaleAmount($id: Int){
              data : userSaleAmount(id : $id)
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

  getUserBookedSession(id: number) {
    return this.apollo.query({
      fetchPolicy: 'no-cache',
      query: gql`
          query userBookedSession($id: Int){
              data : userBookedSession(id : $id)
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

  getReviewRating(id: number) {
    return this.apollo.query({
      query: gql`
          query userAllRatingReview($id: Int!){
              data : userAllRatingReview(id : $id){
                  id
                  first_name
                  last_name
                  profile_pic
                  serviceId
                  serviceName
                  serviceImage
                  rate
                  comment
                  userId
                  created_at
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

  getUsers(request: any) {
    return this.apollo.query({
      fetchPolicy: 'no-cache',
      query: gql`
                query users($request:UsersDataTableInput){
                    data : users( input : $request){
                        data {
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
                            last_login_at
                            register_date
                            phone
                        }meta{
                            from
                            to
                            total
                            per_page
                            current_page
                            last_page
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
}
