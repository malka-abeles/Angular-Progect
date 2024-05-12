// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(): boolean {
        if (localStorage.getItem('currentUser')) {
            return true; // User is logged in
        } else {
            this.router.navigate(['/login']);
            return false; // User is not logged in
        }
    }
}
