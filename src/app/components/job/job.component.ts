import { Component, Input } from '@angular/core';
import { Job } from '../../models/Job';
import { JobField } from '../../models/jobField'
import { Router } from '@angular/router';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-job',
  // standalone: true,
  // imports: [],
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})

export class JobComponent {

  jobData: Job | null = null;


  constructor(private router: Router, private Jobsservice: JobsService) {

  }
  // @Input() jobData: Job| null = null
  @Input() set _jobData(value: Job) {
    this.jobData = value;
  }

  ngOnInit() {
    console.log('Job Data:', this.jobData); // Log to inspect the received jobData
  }

  getField() {
    return JobField[parseInt(this.jobData?.fields.toString()!, 10)]
  }

  sendResum(){

  }

  showDetails() {
    this.router.navigate(['/home/job-ditels'], {
      state: {
        message: {
          fields: this.jobData?.fields,
          name: this.jobData?.name,
          numHours: this.jobData?.numHours,
          area: this.jobData?.area,
          requirement: this.jobData?.requirement,
          fromHome: this.jobData?.fromHome,
        }
      }
    });
  }



  increment() {
    this.Jobsservice.increment(this.jobData!);
  }

}
