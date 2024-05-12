import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JobsService } from '../../services/jobs.service'
import { User } from '../../models/User';
import { JobField } from '../../models/jobField';
import { userService } from '../../services/users.service';
import { Job } from '../../models/Job';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  // standalone: true,
  // imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  currentUser: User|null = {
    fields: JobField.BackEnd,
    id: "",
    name: "",
    password: "",
  }

  // numCv: number = 0;
  count$!: Observable<number>;

  constructor(private router: Router, private jobsService: JobsService, private UserService: userService) {
    if (typeof localStorage !== 'undefined')
      this.nameCurrentUser()
  }

  ngOnInit() {
    this.count$ = this.jobsService.counter1;
  }

  public nameCurrentUser() {
    this.currentUser = this.UserService.getUserFromLocalStorage();
  }


  jobsByField() {
    this.router.navigate(['/home/filterjobs'], {
      state: {
        message:
          this.toFilterJobs("fields", this.currentUser!.fields)
      }
    })
  }

  toFilterJobs(field: keyof Job, value: any):Job[]{
    console.log(this.jobsService.jobs.filter(obj => obj[field] === value))
    this.jobsService.jobs.forEach(obj => console.log(obj[field], value));
    return this.jobsService.jobs.filter(obj => obj[field] === value);
}

  jobFieldes(num: number) {
    return JobField[num];
  }
}
