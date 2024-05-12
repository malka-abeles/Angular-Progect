import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User'
import { JobField } from "../models/jobField";
import { Router } from '@angular/router';
import { json } from "express";
import { JobsService } from "./jobs.service";


@Injectable()
export class userService {

    user: User = {
        id: "",
        name: "",
        password: "",
        fields: JobField.BackEnd,
    }
    constructor(private http: HttpClient, private router: Router, private jobservice: JobsService) {
    }


    getUser(name: string, password: string) {
        this.user = {
            id: "",
            name: name,
            password: password,
            fields: JobField.BackEnd,
        }
        this.http.post('https://localhost:7178/api/User/id', this.user).subscribe((res: any) => {
            if (res == null)
                alert("the name or the password is not valid!")
            else {
                localStorage.setItem("currentUser", JSON.stringify(res));
                this.router.navigate(['/home/jobs'], {
                    state: {
                        message: this.jobservice.jobs
                    }
                });
            }
        })
    }

    getUserFromLocalStorage() {
        if (typeof localStorage !== 'undefined') {
            const name = localStorage.getItem("currentUser");
            if (name)
                return JSON.parse(name);
        }
        else
            return this.user
    }
}