import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const Fragments = {
  CategoryData: gql`
      fragment CategoryData on Categories {
          id
          name
          slug
          image
          description
          created_at
          updated_at
          deleted_at
        services{
              id
              categoryId
              name
              slug
              image
              description
              duration
              price
              created_at
              updated_at
              deleted_at
          }
      }
  `,
  ServiceData: gql`
      fragment ServiceData on Services {
          id
          categoryId
          name
          slug
          image
          description
          duration
          duration_type
          price
          price_type
          statistics
          created_at
          updated_at
          deleted_at
          category{
              id
              name
              slug
              image
              created_at
              updated_at
              deleted_at
          } 
      }
  `
};

@Injectable({
  providedIn: 'root'
})
export class ServiceCategoryService {

  constructor(private apollo: Apollo) { }

  getAllServices(request?: any) {
    return this.apollo.query({
      fetchPolicy: 'no-cache',
      query: gql`
            query getServices{
                data : getServices{
                    id
                    categoryId
                    price
                    price_type
                    name
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

  getCategories(request?: any) {
    return this.apollo.query({
      fetchPolicy: 'no-cache',
      query: gql`
            query Categories($request: CategoryDataTableInput){
                data : Categories( input : $request){
                    data {
                    ...CategoryData
                    }
                    meta {
                        total
                    }
                        
                }
            }
            ${Fragments.CategoryData}
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

  addCategory(request: any) {
    return this.apollo.mutate({
      mutation: gql`
            mutation saveCategory($request: CategoryInput!){
                data : saveCategory( input: $request){
                    message
                    status
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

  deleteCategory(id: number) {
    return this.apollo.mutate({
      mutation: gql`
            mutation deleteCategory($id: Int!){
                data : deleteCategory(id : $id){
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

  getServices(request: any) {
    return this.apollo.query({
      fetchPolicy: 'no-cache',
      query: gql`
            query allServices($request: ServiceDataTableInput){
                data : allServices( input : $request){
                    data {
                    ...ServiceData
                    }
                    meta {
                        total
                    }
                        
                }
            }
            ${Fragments.ServiceData}
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

  addServices(request: any) {
    return this.apollo.mutate({
      mutation: gql`
            mutation saveService($request: ServiceInput!){
                data : saveService( input: $request){
                    message
                    status
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

  deleteService(id: number) {
    return this.apollo.mutate({
      mutation: gql`
            mutation deleteService($id: Int!){
                data : deleteService(id : $id){
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

  viewService(id: number) {
    return this.apollo.mutate({
      mutation: gql`
            mutation viewService($id: Int!){
                data : viewService(id : $id){
                    id
                    categoryId
                    name
                    slug
                    image
                    description
                    duration
                    duration_type
                    price
                    price_type
                    tool
                    typical_scope
                    statistics
                    created_at
                    updated_at
                    deleted_at
                    category{
                        id
                        name
                        slug
                        image
                        created_at
                        updated_at
                        deleted_at
                    }
                    
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

  restoreCategory(id: number) {
    return this.apollo.mutate({
      mutation: gql`
            mutation restoreCategory($id: Int!){
                data : restoreCategory(id : $id){
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
