import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationTemplateService {

  constructor(private apollo: Apollo) { }

  get(request: any) {
    return this.apollo.query({
      fetchPolicy: 'no-cache',
      query: gql`
                query notificationTemplates($request: NotificationTemplateDataTableInput){
                    data : notificationTemplates(input: $request){
                        meta{
                            total
                        }
                        data {
                            id
                            name
                            slug
                            title
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

  find(id: any) {
    return this.apollo.query({
      fetchPolicy: 'no-cache',
      query: gql`
                query notificationTemplate($id: Int!){
                    data : notificationTemplate( id : $id){
                        id
                        title
                        slug
                        body
                        name
                        created_at
                        updated_at
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

  sendNotification(request: any) {
    return this.apollo.mutate({
      mutation: gql`
            mutation sendNotification($request: SendNotificationInput!){
                data : sendNotification( input: $request){
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

  add(request: any) {
    return this.apollo.mutate({
      mutation: gql`
            mutation addNotificationTemplate($request: NotificationTemplateInput!){
                data : addNotificationTemplate( input: $request){
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

  delete(id: number) {
    return this.apollo.mutate({
      mutation: gql`
            mutation deleteNotificationTemplate($id: Int!){
                data : deleteNotificationTemplate(id: $id){
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
}
