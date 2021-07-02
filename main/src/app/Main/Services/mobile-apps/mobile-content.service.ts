import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
export const Fragments = {
  PageData: gql`
  fragment PageData on Pages {
      id
      name
      title
      slug
      content
      meta_title
      meta_description
      meta_keyword
      typeOfUser
      platform
      created_at
      updated_at
  }
`,
}
@Injectable({
  providedIn: 'root'
})

export class MobileContentService {

  constructor(private apollo: Apollo) { }

  getAllPage(request: any) {
    return this.apollo.query({
      fetchPolicy: 'no-cache',
      query: gql`
                query getPages($request:PagesDataTableInput){
                    data : getPages( input : $request){
                        meta {
                            total
                        }
                        data {
                        ...PageData
                        }
                    }
                }
                ${Fragments.PageData}
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


  deletePage(id: number) {
    return this.apollo.mutate({
      mutation: gql`
            mutation deletePage($id:Int!){
                data : deletePage(id : $id){
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

  addPage(request: any) {
    return this.apollo.mutate({
      mutation: gql`
          mutation savePage($request: PagesInput!){
              data : savePage( input: $request){
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
}
