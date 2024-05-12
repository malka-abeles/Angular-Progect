import { Injectable } from "@angular/core";
import { Job } from "../models/Job";
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class JobsService {

    jobs: Job[] = [];
    filterJobs:Job[]  =[]; 


    constructor(private http: HttpClient) {
        this.getAllJobs();
    }


    getAllJobs() {
        this.http.get('https://localhost:7178/api/Job/GetAllJobs').subscribe((res: any) => {
            res.forEach((e: any) => { this.jobs.push(e) });
        })
    }

    toFilterJobs(field: keyof Job, value: any):Job[]{
        return this.jobs.filter(obj => obj[field].toString() === value);
    }


        private counter = 0;
        private counterSubject = new Subject<number>();
        private listOfCv : Job[] = []; 
      
        counter1 = this.counterSubject.asObservable();
      
        increment(job:Job) {
          this.counter++;
          this.counterSubject.next(this.counter);
          this.listOfCv.push(job);
        }
    
}

