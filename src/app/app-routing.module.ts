import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { JobDitelsComponent } from './components/job-ditels/job-ditels.component';
import { AuthGuard } from './services/AuthGuard.service';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path:"",component: LoginComponent},
  { path: "login", component: LoginComponent },
  {
    path: "home", component: MainComponent,canActivate: [AuthGuard], children: [
      { path: "jobs", component: JobListComponent },
      { path: "filterjobs", component: JobListComponent },
      { path: "job-ditels", component: JobDitelsComponent },]
  },
  {path:"**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
