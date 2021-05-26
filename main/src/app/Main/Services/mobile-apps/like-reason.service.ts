import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
export const Fragments = {
  FaqData: gql`
      fragment FaqData on Faq {
          id
          question
          answer
          categoryId
          displayTask
          platform
          created_at
          updated_at
          category{
              id
              name
              slug
              description
              created_at
              updated_at
          }
      }
  `,
  ReferralData: gql`
      fragment ReferralData on Referral {
          id
          userId
          referralId
          status
          used_referral
          used_at
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
      }
  `,
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
  FaqCategoryData: gql`
      fragment FaqCategoryData on FaqCategory {
          id
          name
          slug
          description
          created_at
          updated_at
      }
  `,
  BadgeData: gql`
      fragment BadgeData on Badge {
          id
          name
          slug
          image
          created_at
          updated_at
          deleted_at
      }
  `,
  KnowledgeData: gql`
      fragment KnowledgeData on Knowledge {
          id
          name
          slug
          image
          skillId
          skill{
              id
              name
          }
          created_at
          updated_at
          deleted_at
      }
  `,
  LikeReasonData: gql`
      fragment LikeReasonData on LikeReason {
          id
          reason
          status
          type
          review_star
          created_at
          updated_at
      }
  `,
  DisputeReasonData: gql`
      fragment DisputeReasonData on DisputeReason {
          id
          reason
          status
          created_at
          updated_at
      }
  `, 
  ReasonData: gql`
      fragment ReasonData on Reason {
          id
          reason
          status
          created_at
          updated_at
      }
  `,
  RejectReasonData: gql`
      fragment RejectReasonData on RejectReason {
          id
          reason
          status
          created_at
          updated_at
      }
  `,
  TranspotationData: gql`
      fragment TranspotationData on Transpotations {
          id
          name
          image
          created_at
          updated_at
      }
  `,
  FindsomeoneReasonsData: gql`
      fragment FindsomeoneReasonsData on FindsomeoneReasons {
          id
          reason
          status
          created_at
          updated_at
      }
  `
};
@Injectable({
  providedIn: 'root'
})
export class LikeReasonService {

  constructor(private apollo: Apollo,) {}
  getLikeReasons(request: any) {
    return this.apollo.query({
        fetchPolicy: 'no-cache',
        query: gql`
                query getLikeReasons($request: LikeReasonsDataTableInput!){
                    data : getLikeReasons( input : $request){
                        meta {
                            total
                        }
                        data {
                        ...LikeReasonData
                        }
                    }
                }${Fragments.LikeReasonData} `,
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

    //Delete Resaon using id
    deleteLikeReason(id: number) {
      return this.apollo.mutate({
          mutation: gql`
              mutation deleteLikeReason($id:Int!){
                  data : deleteLikeReason(id : $id){
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

      //Add and Update Like Reason
      addLikeReason(request: any) {
        return this.apollo.mutate({
            mutation: gql`
                mutation saveLikeReason($request: LikeReasonInput!){
                    data : saveLikeReason( input: $request){
                        message
                        status
                        data{
                            ...LikeReasonData
                        }
                    }
                }
                ${Fragments.LikeReasonData}
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
