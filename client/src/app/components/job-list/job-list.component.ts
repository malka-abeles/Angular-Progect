import { Component, Injectable } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { Job } from '../../models/Job';
import { JobField } from '../../models/jobField';
import { Router } from '@angular/router';


@Component({
  selector: 'app-job-list',
  // standalone: true,
  // imports: [],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss'
})


export class JobListComponent {

  allJobs: Job[] = [];
  FilterJobsBy: string = "";
  FilterJobsByArea: boolean = false;
  FilterJobsByFeild: boolean = false;
  jobFieldKeys: string[] = [];


  // עם הבנאי הזה הוא מקבל את הרישמה ממי שקורא לקומפוננטה
  constructor(private router: Router, private jobsService: JobsService) {
    this.allJobs = history.state.message;
  }

  ngOnInit() {
    this.getEnum();
  }

  getEnum() {
    let count = 0;
    for (const key in JobField) {
      if (isNaN(Number(key))) {
        this.jobFieldKeys[count]=key;
        count++;
      }
    }
  }

  onOptionSelected(selectedValue: any) {
    this.FilterJobsBy = selectedValue.value;
    if (this.FilterJobsBy === "area") {
      this.FilterJobsByArea = true;
      this.FilterJobsByFeild = false;
    }
    else {
      this.FilterJobsByFeild = true;
      this.FilterJobsByArea = false;
    }
  }

  jobFieldes(num: number) {
    return JobField[num];
  }

  onOptionSelectedArea(selectedValue: any) {
    this.allJobs = this.toFilterJobs("area", selectedValue.value);
  }

  onOptionSelectedField(selectedValue: any) {
    console.log(selectedValue.value);
    this.allJobs = this.toFilterJobs("fields", selectedValue.value);
  }


  toFilterJobs(field: keyof Job, value: any): Job[] {
    this.jobsService.jobs.forEach(obj => console.log(obj[field], value));
    return this.jobsService.jobs.filter(obj => obj[field].toString() === value);
  }
}
