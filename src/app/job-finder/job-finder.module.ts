import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { JobFinderRoutingModule } from './job-finder-routing.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [SplashScreenComponent],
  imports: [
    CommonModule,
    JobFinderRoutingModule,
    MatProgressBarModule,
  ]
})
export class JobFinderModule { }
