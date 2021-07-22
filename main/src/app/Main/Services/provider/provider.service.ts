import { Injectable } from '@angular/core';
import { throwError, Subject } from 'rxjs';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map, catchError } from 'rxjs/operators';
export const Fragments = {
  Contractor: gql`
  fragment Contractor on User {
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
          isVerified
          address
          vatNum
          vatName
          isIssueRaised
          isRattingNegative
          last_login_at
          register_date
          preference{
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
          userAttachments {
              id
              userId
              name
              path
              type
              is_verified
              isReject
              rejectedReason
              created_at
              updated_at
              deleted_at
          }
          jobs {
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
      }
`,
};
@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private apollo: Apollo) { }

  getTimeslots(request?: any) {
    return this.apollo.query({
      fetchPolicy: 'no-cache',
      query: gql`
                query timeslots{
                    data : timeslots{
                        data {
                            id
                            name
                        }
                    }
                }
            `,
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

  getCancleReasons(request?: any) {
    return this.apollo.query({
      fetchPolicy: 'no-cache',
      query: gql`
                query reasons($request:LikeReasonsByTypeInput){
                    data : reasons( input : $request){
                        data {
                            id
                            reason
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

  getContractors(request?: any) {
    return this.apollo.query({
      fetchPolicy: 'no-cache',
      query: gql`
                query contractors($request:ContractorsDataTableInput){
                    data : contractors( input : $request){
                        data {
                            ...Contractor
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
                ${Fragments.Contractor}
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

  deleteContractor(id: any) {
    return this.apollo.mutate({
      mutation: gql`
            mutation deleteContractor($id:Int!){
                data : deleteContractor(id : $id){
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

  blockContractor(request: any) {
    return this.apollo.mutate({
      mutation: gql`
            mutation blockContractor($request: BlockContractorInput!){
                data : blockContractor(input : $request){
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

  activeContractor(id: any) {
    return this.apollo.mutate({
      mutation: gql`
            mutation activeContractor($id:Int!){
                data : activeContractor(id : $id){
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

  abusiveContractor(id: any) {
    return this.apollo.mutate({
      mutation: gql`
            mutation abusiveContractor($id:Int!){
                data : abusiveContractor(id : $id){
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

  addContractor(request: any) {
    return this.apollo.mutate({
      mutation: gql`
            mutation addContractor($request: ContractorInput!){
                data : addContractor( input : $request){
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

  contractorJob(id: number) {
    return this.apollo.mutate({
      fetchPolicy: 'no-cache',
      mutation: gql`
            mutation contractorJob($id: Int!){
                data : contractorJob(id : $id){
                    ...Contractor
                }
            }
            ${Fragments.Contractor}
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

  viewContractor(id: number) {
    return this.apollo.mutate({
      fetchPolicy: 'no-cache',
      mutation: gql`
            mutation viewContractor($id: Int!){
                data : viewContractor(id : $id){
                    ...Contractor
                }
            }
            ${Fragments.Contractor}
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

  documentReject(attachmentId: number, rejectedReason: String) {
    return this.apollo.mutate({
      fetchPolicy: 'no-cache',
      mutation: gql`
            mutation documentReject($attachmentId: Int!, $rejectedReason: String!){
                data : documentReject(attachmentId : $attachmentId, rejectedReason : $rejectedReason){
                    data
                    message
                    status
                }
            }
        `,
      variables: {
        attachmentId,
        rejectedReason
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

  verifyAttachment(attachmentId: number, isVerified: Boolean) {
    return this.apollo.mutate({
      fetchPolicy: 'no-cache',
      mutation: gql`
            mutation verifyAttachment($attachmentId: Int!, $isVerified: Boolean!){
                data : verifyAttachment(attachmentId : $attachmentId, isVerified : $isVerified){
                    data
                    message
                    status
                }
            }
        `,
      variables: {
        attachmentId,
        isVerified
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
            query providerRatingReview($id: Int!){
                data : providerRatingReview(id : $id){
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



  addScheduleInterview(request: any) {
    return this.apollo.mutate({
      mutation: gql`
            mutation addScheduleInterview($request: ScheduleInterviewInput!){
                data : addScheduleInterview(input : $request){
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

  getContractorAssignJob(id: any) {
    return this.apollo.query({
      fetchPolicy: "no-cache",
      query: gql`
            query contractorAssignJob($id:Int!){
                data : contractorAssignJob(id : $id)
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

  getContractorRevenue(id: any) {
    return this.apollo.query({
      fetchPolicy: "no-cache",
      query: gql`
            query contractorRevenue($id:Int!){
                data : contractorRevenue(id : $id)
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


  verifyProfile(userId: number) {
    return this.apollo.mutate({
      fetchPolicy: 'no-cache',
      mutation: gql`
            mutation verifyProfile($userId: Int!){
                data : verifyProfile(userId : $userId){
                    message
                    status
                }
            }
        `,
      variables: {
        userId
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
