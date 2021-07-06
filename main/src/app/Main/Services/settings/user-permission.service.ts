import { Injectable } from '@angular/core';
import {Apollo,gql} from 'apollo-angular';
import {map, catchError} from 'rxjs/operators';
import { throwError, Subject, BehaviorSubject, Observable } from 'rxjs';


export interface PermissionsModel {
	id?: number;
	name?: string;
	slug?: string;
}
@Injectable({
  providedIn: 'root'
})
export class UserPermissionService {
    private dataSource: {
		permissions: Array<PermissionsModel>;
	};
    private _permissions: BehaviorSubject<any>;
    
    constructor(
        private apollo: Apollo,
    ) {
        this.dataSource = { permissions: [] };
		this._permissions = new BehaviorSubject(this.dataSource.permissions);
    }

    public get $permissions(): Observable<Array<PermissionsModel>> {
		return this._permissions.asObservable();
	}

	public get permissions(): Array<PermissionsModel> {
		return this.dataSource.permissions;
    }
    
	public set permissions(value: Array<PermissionsModel>) {
		this.dataSource.permissions = value;
		this._permissions.next(Object.assign({}, this.dataSource).permissions);
	}
  getRole(id:any){
    return this.apollo.mutate({
        mutation: gql` 
            mutation editRole($id:Int!){
                data : editRole(id : $id){
                    data {
                        id
                        name
                        roleHasPermissions{
                            roleId
                            id
                            permissionId
                        }
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
  getAllRoles() {
    return this.apollo.query({
        fetchPolicy: 'no-cache',
        query: gql`
                query roles{
                    data : roles{
                        data{
                            id
                            name
                            slug
                            created_at
                            updated_at
                        }
                    }
                }
            `,
    })
        .pipe(
            map((resp: any) => {
                return resp.data.data.data;
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

getRoles(request: any) {
    return this.apollo.query({
        fetchPolicy: 'no-cache',
        query: gql`
                query roles($request:RolesDataTableInput){
                    data : roles( input : $request){
                        data{
                            id
                            name
                            slug
                            created_at
                            updated_at
                        }
                        meta
                        {
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

addRole(request: any) {

  return this.apollo.mutate({
      mutation: gql`
          mutation addRole($request: RoleInput!){
              data : addRole( input : $request){
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

getPermissions(){
    return this.apollo.query({
        fetchPolicy: 'no-cache',
        query: gql`
                query permissions{
                    data : permissions{
                        data{
                            id
                            name
                            slug
                        }
                    }
                }
            `
    })
        .pipe(
            map((resp: any) => {
                this.permissions = resp.data.data.data;
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
