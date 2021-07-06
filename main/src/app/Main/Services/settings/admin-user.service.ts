import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminUserService {

  constructor(private apollo: Apollo) { }

  getAdminUsers(request: any) {
    return this.apollo.query({
      fetchPolicy: 'no-cache',
      query: gql`
                query adminUsers($request:UsersDataTableInput){
                    data : adminUsers( input : $request){
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
                            role {
                                id
                                name
                            }
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


  deleteUser(id: number) {
    return this.apollo.mutate({
      mutation: gql`
            mutation deleteUser($id:Int!){
                data : deleteUser(id : $id){
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

  blockUser(id: number) {
    return this.apollo.mutate({
      mutation: gql`
            mutation blockUser($id:Int!){
                data : blockUser(id : $id){
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


  activeUser(id: number) {
    return this.apollo.mutate({
      mutation: gql`
          mutation activeUser($id:Int!){
              data : activeUser(id : $id){
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

  addUser(request: any) {
    return this.apollo.mutate({
      mutation: gql`
            mutation addUserAdmin($request: UserInput!){
                data : addUserAdmin(input : $request){
                    message
                }
            }
        `,
      variables: {
        request
      }
    })
      .pipe(
        map((resp: any) => {
          console.log(resp, 'resp');
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
