import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  dataStore: {
    token: any
    user: any
  }

  private _token: BehaviorSubject<string>;
  private _user: BehaviorSubject<any>;

  constructor(
    private apollo: Apollo,
    public jwtHelper: JwtHelperService,
  ) {
    this.dataStore = {
      token: null,
      user: false
    }
    this._token = new BehaviorSubject(this.dataStore.token);
    this._user = new BehaviorSubject(this.dataStore.user);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  loggedIn() {
    const token: any = localStorage.getItem('token');
    return token != null;
  }

  public get $token(): Observable<any> {
    return this._token.asObservable();
  }

  public get token(): any {
    return this.dataStore.token;
  }

  public set token(value: any) {
    this.dataStore.token = value;
    if (value) {
      localStorage.setItem('token', this.dataStore.token)
    } else {
      localStorage.removeItem('token');
    }

    this._token.next(this.dataStore.token);
  }

  public get $user(): Observable<any> {
    return this._user.asObservable();
  }

  public getUser() {
    return localStorage.getItem('user');
  }

  public get user(): any {
    return this.dataStore.user;
  }
  public set user(value: any) {
    this.dataStore.user = value;
    if (value) {
      localStorage.setItem('user', JSON.stringify(this.dataStore.user));
    } else {
      localStorage.removeItem('user');
    }
    this._user.next(Object.assign({}, this.dataStore).user);
  }



  login(request: any) {
    return this.apollo.mutate({
      mutation: gql`
                  mutation login($email:String!, $password:String!){
                      data : login( input : {
                          email : $email
                          password : $password
                          is_admin: true
                      }){
                          token
                          user {
                              id
                              first_name
                              last_name
                              email
                              gender
                              dob
                              profile_pic
                              status
                              role_id
                              permissions
                          }
                      }
                  }
              `,
      variables: {
        ...request
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

        this.token = data.token;
        this.user = data.user;
        this.isLoggedIn = true;
        return data;
      }).catch((error) => {
        this.isLoggedIn = false;
        this.token = null;
        this.user = false;
        error = ((error.graphQLErrors && error.graphQLErrors[0]) ? error.graphQLErrors[0] : error);
        throw error;
      })

  }


  // this funcation used for Forget password when send email
  forgotPassword(request: any) {
    return this.apollo.mutate({
      mutation: gql`
            mutation forgotPassword($email:String!){
                data : forgotPassword(email : $email){
                    status
                    message
                }
            }
        `,
      variables: {
        ...request
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
      })
      .catch((error) => {
        error = ((error.graphQLErrors && error.graphQLErrors[0]) ? error.graphQLErrors[0] : error);
        throw error;
      })

  }

  // Using Email id set new password 
  setPassword(request: any) {

    return this.apollo.mutate({
      mutation: gql`
            mutation setPassword($token:String!,$password:String!){
                data : setPassword(input : {
                        token : $token
                        password : $password
                    })
                {
                    message
                }
            }
        `,
      variables: {
        ...request
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
      })
      .catch((error) => {
        error = ((error.graphQLErrors && error.graphQLErrors[0]) ? error.graphQLErrors[0] : error);
        throw error;
      })

  }
}
