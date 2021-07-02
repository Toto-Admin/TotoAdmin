import { Injectable } from '@angular/core';
import {Apollo,gql} from 'apollo-angular';
import {map, catchError} from 'rxjs/operators';
import { throwError } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private apollo: Apollo) { }

  get(request?: any) {
    return this.apollo.query({
        fetchPolicy: 'no-cache',
        query: gql`
                query getSettings{
                    data : getSettings{
                        to_email
                        referral_discount
                        address
                        twitter_link
                        phone
                        maxDay
                        onsite_info
                        from_email
                        basic_info
                        remote_info
                        fb_link
                        insta_link
                        completed_text
                        detail_text
                        reschedule_text
                        coverage_info
                        availability_info
                        category_info
                        feedback_ratio_info
                        referral_info
                        customer_liked_info
                        is_vat
                        is_bank_account
                        is_coverage_area
                        is_availability
                        is_add_skill
                        is_insurance
                        is_notify
                        no_of_attempt_info
                        test_date_info
                        test_duration_info
                        rating_info
                        time_keeping_info
                        complaints_info
                        response_info
                        acceptance_info
                        reliability_info
                        correction_rate_info
                        seeker_charges
                        provider_charges
                        vat_charges
                        stripe_charges
                        is_seeker_charge
                        is_provider_charge
                        is_poor_performance
                        poor_performance
                        stripe_private_key
                        stripe_secrate_key
                        twillio_from_number
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
            mutation saveSettings($request: JSON!) {
                data : saveSettings(settings: $request)
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
