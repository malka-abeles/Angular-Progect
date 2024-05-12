import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { JobComponent } from './components/job/job.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { RouterModule } from '@angular/router';
import { JobDitelsComponent } from './components/job-ditels/job-ditels.component';
import { HttpClientModule } from '@angular/common/http';
import { JobsService } from './services/jobs.service';
import { userService } from './services/users.service';
import { MainComponent } from './components/main/main.component';
import { AuthGuard } from './services/AuthGuard.service';
import { NotFoundComponent } from './components/not-found/not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    JobComponent,
    JobListComponent,
    JobDitelsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    JobsService,
    userService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
