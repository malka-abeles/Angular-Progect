import { Component, Input } from '@angular/core';
import { Job } from "../../models/Job"
import { JobField } from "../../models/jobField"
import { Router } from '@angular/router';
import { cwd } from 'process';


@Component({
  selector: 'app-job-ditels',
  // standalone: true,
  // imports: [],
  templateUrl: './job-ditels.component.html',
  styleUrl: './job-ditels.component.scss'
})
export class JobDitelsComponent {

  _jobData: any;


  constructor(private router: Router) {
    this._jobData = history.state.message;
  }


  getField() {
    return JobField[parseInt(this._jobData?.fields.toString()!, 10)]
  }
  
}
