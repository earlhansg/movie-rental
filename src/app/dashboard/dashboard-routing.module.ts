import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../login/shared/guard/auth.guard';

import { DashboardComponent } from './container/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'new-release',
        loadChildren: () => import('./new-release/new-release.module')
        .then(mod => mod.NewReleaseModule)
      },
      {
        path: 'coming-soon',
        loadChildren: () => import('./coming-soon/coming-soon.module')
        .then(mod => mod.ComingSoonModule)
      },
      {
        path: 'trending',
        loadChildren: () => import('./trending/trending.module')
        .then(mod => mod.TrendingModule)
      },
      {
        path: 'borrowed',
        loadChildren: () => import('./borrowed/borrowed.module')
        .then(mod => mod.BorrowedModule)
      },
      {
        path: 'movie',
        loadChildren: () => import('./movie/movie.module')
        .then(mod => mod.MovieModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./users/user.module')
        .then(mod => mod.UserModule)
      },
      {
        path: '',
        redirectTo: 'new-release',
        pathMatch: 'full'
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
