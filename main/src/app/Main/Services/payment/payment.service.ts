import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map, catchError } from 'rxjs/operators';

export const Fragments = {
    Payment: gql`
      fragment Payment  on Payment {
          id
          userId
          amount
          jobId
          description
          amount
          payment_gateway_id
          payment_gateway_type
          card_type
          data
          type
          created_at
          job{
              id
              title
              status
              user{
                  id
                  first_name
                  last_name
                  
              }
              provider{
                  id
                  first_name
                  last_name
              }
              service{
                  id 
                  name
              }
          }

      }
  `,
  JobDetailData: gql`
        fragment JobDetailData  on JobDetail {
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
                completed_text
                detail_text
                reschedule_text
                work_perform_text
                arival_time
                estimated_time
                finish_time
                publish_time
                start_time
                end_time
                work_hour
                isReschedule
                cancelledId
                lat
                long
                signature
                isReturnVisit
                returnJobId
                created_at
                updated_at
                deleted_at
                paymentStatus

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
                phone
            }
            provider{
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
                phone
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
            address{
                id
                userId
                street
                city
                state
                zipcode
                lat
                lng
                type
                comment

                created_at
                updated_at
                deleted_at
            }
            attachments{
                id
                jobId
                userId
                path
                file_name
                file_size
                created_at
                updated_at
                deleted_at
                type
            }
            schedule{
                id
                userId
                jobId
                comment
                timeSlotsId
                address
                status
                created_at
                updated_at
                deleted_at
                date
                timeSlots{
                    id
                    name
                    start_time
                    end_time
                    created_at
                    updated_at
                    deleted_at
                }
            }
            promocodeUse{
                id
                promo_code_id
                amount
                used_at
                created_at
                updated_at
                deleted_at
                promocode{
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
            }
            reviewRating{
                id
                userId
                jobId
                rate
                comment
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
            }
            rejectReasons{
                id
                userId
                jobId
                reasonId
                comment
                created_at
                updated_at
                deleted_at
            }
            jobTimer{
                id
                jobId
                start_time
                end_time
                total_time
                created_at
                deleted_at
            }
            extra{
                id
                userId
                jobId
                accessories
                price
                created_at
                updated_at
                deleted_at
            }
            help {
                id
                jobId
                userId
                description
                status
                created_at
                updated_at
                deleted_at
                attachments{
                    id
                    helpId
                    path
                    file_name
                    file_size
                    created_at
                    updated_at
                    deleted_at
                }
            }
            reasons{
                id
                reason
                created_at
                updated_at
            }
            payment{
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
            }
        }
    `,
};
@Injectable({
    providedIn: 'root'
})
export class PaymentService {

    constructor(private apollo: Apollo) { }


    getAllPayments(request: any) {
        return this.apollo.query({
            fetchPolicy: 'no-cache',
            query: gql`
                query getPayments($request: PaymentsDataTableInput){
                    data : getPayments( input : $request){
                        meta {
                            total
                        }
                        data {
                        ...Payment
                        }
                    }
                }
                ${Fragments.Payment}
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


    viewPayment(id : any) {
        return this.apollo.query({
            fetchPolicy: 'no-cache',
            query: gql`
                    query getPaymentByJob($request:Int!){
                        data : getPaymentByJob(id : $request){
                            ...JobDetailData
                            totalAmount {
                                extraAmout
                                extraPaidAmount
                                ServiceTotalAmount
                                ServicePayableAmout
                                ServicePaidAmout
                                SubTotalAmount
                                isPaymentRemain
                                adminSeekerFees
                                adminProviderFees
                                adminVatFees
                                discountAmount
                                totalProviderFees
                                totalProviderPaid
                                totalSeekerFees
                                totalSeekerPaid
                                referralCodeAmount
                            }
                        }
                    }
                    ${Fragments.JobDetailData}
                `,
            variables: {
                request: id
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

    viewJobPayment(id:any) {
        return this.apollo.mutate({
           fetchPolicy: 'no-cache',
           mutation: gql`
                   mutation jobTotalAmount($jobId:Int!){
                       data : jobTotalAmount( jobId : $jobId){
                           extraAmout
                           extraPaidAmount
                           ServiceTotalAmount
                           ServicePayableAmout
                           ServicePaidAmout
                           SubTotalAmount
                           isPaymentRemain
                           adminSeekerFees
                           adminProviderFees
                           adminVatFees
                           discountAmount
                           totalProviderFees
                           totalProviderPaid
                           totalSeekerFees
                           totalSeekerPaid
                           referralCodeAmount
                       }
                   }
               `,
           variables: {
               jobId: id
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
