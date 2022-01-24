import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './domain/Auth/login';
import { AuthGuard } from './domain/Auth/_helpers';

const routes: Routes = [
  // { path: '', component: LoginComponent },
  {
    path: 'login',
    loadChildren: () => import('./domain/Auth/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'Dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard/dashboard.module').then((m) => m.DashboardPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'daily-trends-details',
    loadChildren: () => import('./pages/daily-trends/daily-trends.routing.module').then((m) => m.DailyTrendsRoutingModule),
    canActivate: [AuthGuard],
  },
  // {
  //   path: '',
  //   loadChildren: () => import('./shared/components/shared-components.module').then((m) => m.SharedComponentsModule),
  //   canActivate: [AuthGuard],
  // },
  {
    path: '**',
    loadChildren: () => import('./domain/Auth/login/login.module').then((m) => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const routingComponents = [
//   LoginComponent
// ];
