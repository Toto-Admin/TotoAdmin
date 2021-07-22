import { Injectable } from '@angular/core';
import { throwError, Subject } from 'rxjs';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map, catchError } from 'rxjs/operators';

export const Fragments = {
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
`
}


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private apollo: Apollo) { }
  
  getJobs(request: any) {
    return this.apollo.query({
        fetchPolicy: 'no-cache',
        query: gql`
                query adminJobs($request:JobDataTableInput){
                    data : adminJobs( input : $request){
                        meta {
                            total
                        }
                        data {
                            id
                            service{
                                name
                            }
                            user{
                                first_name
                                last_name
                                id
                            }
                            provider{
                                first_name
                                last_name
                                id
                            }
                            type
                            status
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


viewJob(request: any) {
    return this.apollo.query({
        fetchPolicy: 'no-cache',
        query: gql`
                query job($request:Int!){
                    data : job(id : $request){
                        ...JobDetailData
                    }
                }
                ${ Fragments.JobDetailData}
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
getContractorLiveLocation(jobId: any) {
    return this.apollo.query({
        fetchPolicy: 'no-cache',
        query: gql`
                query getContractorLiveLocation($jobId: Int!){
                    data : getContractorLiveLocation( jobId : $jobId){
                        lat
                        long
                    }
                }
            `,
        variables: {
            jobId
        }
    })
        .pipe(
            map((resp: any) => {
                return resp.data;
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

getJobHistory(jobId: any) {
    return this.apollo.query({
        fetchPolicy: 'no-cache',
        query: gql`
                query getAlltaskHistory($jobId: Int!){
                    data : getAlltaskHistory( jobId : $jobId){
                        id
                        job_id
                        body
                        user{
                            first_name
                            last_name
                        }
                        to_user{
                            first_name
                            last_name
                        }
                    }
                }
            `,
        variables: {
            jobId
        }
    })
        .pipe(
            map((resp: any) => {
                return resp.data;
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
