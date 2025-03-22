import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeComponent } from './resume/resume.component';
import { CarpentryComponent } from './carpentry/carpentry.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: AboutMeComponent, data: { depth: 1 } },
    { path: 'resume', pathMatch: 'full', component: ResumeComponent, data: { depth: 2 } },
    { path: 'carpentry', component: CarpentryComponent, data: { depth: 3 }},
    { path: 'home', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }