import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeComponent } from './resume/resume.component';
import { CarpentryComponent } from './carpentry/carpentry.component';
// import { GamesComponent } from './games/games.component';
// import { ParentingComponent } from './parenting/parenting.component';

export const routes: Routes = [{ path: '', pathMatch: 'full', component: AboutMeComponent, data: { depth: 1 } },
    { path: 'resume', pathMatch: 'full', component: ResumeComponent, data: { depth: 2 } },
    // { path: 'projects', pathMatch: 'full', component: ProjectsComponent, data: { depth: 3 } },
    { path: 'carpentry', component: CarpentryComponent, data: { depth: 4 }},
    // { path: 'games', component: GamesComponent, data: { depth: 5 }},
    // { path: 'parenting', component: ParentingComponent, data: { depth: 6 }},
    { path: 'home', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
