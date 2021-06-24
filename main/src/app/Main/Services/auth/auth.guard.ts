import { Injectable } from '@angular/core';
import {
    Router,
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
} from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    user: any;
    permission: any;
    dummy: any;

    constructor(private router: Router, private authService: AuthService) {}

    async canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ) {
        var str = state.url;
        var res = str.split('/');
        this.user = JSON.parse(localStorage.getItem('user') || '{}');

        let return_data: any = await new Promise((resolve, reject) => {
            const token = this.authService.getToken();
            this.permission = [];

            if (this.user != null) {
                
                this.permission = this.user.permissions;
                this.dummy = 0;
                if( !this.permission.includes('profile')){
                    this.permission.push('profile');
                }

                for (let i = 0; i < this.permission.length; i++) {
                    if (res[1] == this.permission[i]) {
                        this.dummy = 1;
                    }
                }

                if (this.dummy == 0) {
                    this.router.navigate(['/dashboard']);
                }
            }

            if (token && this.permission) {
                resolve(true);
            } else {
                resolve(false);
            }
        });
        if (return_data) {
            return return_data;
        } else {
            this.router.navigate(['/login']);
        }
    }
}
