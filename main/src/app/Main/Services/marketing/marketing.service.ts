import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
export const Fragments = {
  Reward: gql`
      fragment Reward  on Reward {
          id
          name
          amount
          image
          created_at
          updated_at         
      }
  `,
  PromoCodeData: gql`
  fragment PromoCodeData on PromoCode {
      id
      name
      description
      uses
      max_uses
      max_uses_user
      discount_type
      is_fixed
      discount_amount
      starts_at
      expires_at
      created_at
      updated_at
      deleted_at
  }
`
};

@Injectable({
  providedIn: 'root'
})
export class MarketingService {

  constructor(private apollo: Apollo) { }

  getAllRewards(request: any) {
    return this.apollo.query({
      fetchPolicy: 'no-cache',
      query: gql`
                query rewards($request: RewardDataTableInput){
                    data : rewards( input : $request){
                        meta {
                            total
                        }
                        data {
                        ...Reward
                        }
                    }
                }
                ${Fragments.Reward}
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


  addReward(request: any) {
    return this.apollo.mutate({
      fetchPolicy: 'no-cache',
      mutation: gql`
                mutation addReward($request:AddRewardInput!){
                    data : addReward( input : $request){
                        status
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

  deleteReward(request: any) {
    return this.apollo.mutate({
      fetchPolicy: 'no-cache',
      mutation: gql`
                mutation deleteReward($request:Int!){
                    data : deleteReward(id : $request){
                        status
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


  getPromocodes(request?: any) {
    return this.apollo.query({
      fetchPolicy: 'no-cache',
      query: gql`
            query getAllPromocodes($request: PromoCodeDataTableInput){
                data : getAllPromocodes( input : $request){
                    data {
                    ...PromoCodeData
                    }
                    meta {
                        total
                    }
                        
                }
            }
            ${Fragments.PromoCodeData}
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

  addPromoCode(request: any) {
    return this.apollo.mutate({
      mutation: gql`
            mutation addPromoCode($request: PromoCodeInput!){
                data : addPromoCode( input: $request){
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

  sendNotification(request: any) {
    return this.apollo.mutate({
      fetchPolicy: 'no-cache',
      mutation: gql`
                mutation sendNotification($request:SendNotificationInput!){
                    data : sendNotification( input : $request){
                        status
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

  deletePromoCode(id: number) {
    return this.apollo.mutate({
      mutation: gql`
            mutation deletePromoCode($id: Int!){
                data : deletePromoCode(id : $id){
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

  viewPromoCode(id: number) {
    return this.apollo.mutate({
      mutation: gql`
            mutation viewPromoCode($id: Int!){
                data : viewPromoCode(id : $id){
                    ...PromoCodeData
                    userPromocodeAssign
                }
            }
            ${Fragments.PromoCodeData}
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
