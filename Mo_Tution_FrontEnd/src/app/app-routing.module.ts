import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from './pages/signup/signup.component';
import {LoginComponent} from './pages/login/login.component';
import {CbseComponent} from './pages/cbse/cbse.component';
import {DashboardComponent} from './pages/admin/dashboard/dashboard.component';
import {UserDashboardComponent} from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { LandingComponent } from './pages/landing/landing.component';


const routes: Routes = [
 {
  path:'signup',
  component: SignupComponent,
  pathMatch:'full'
 },
 {
  path:'login',
  component: LoginComponent,
  pathMatch:'full'
 },
 {
  path:'',
  component: LandingComponent,
  pathMatch: 'full'
 },
 {
  path:'CBSE',
  component: CbseComponent,
  children:[
    {
      path:'cbse',
      component: CourseDetailComponent
    },
    {
      path:'cbse/:standard',
      component: CourseDetailComponent
    }

  ]

 },
 {
  path:'admin',
  component: DashboardComponent,
  canActivate:[AdminGuard],
  children:[
    {
      path:'home',
      component:WelcomeComponent,
    },
    {
      path:'',
      component:ProfileComponent,
    }
  ]
 },
 {
  path:'user-dashboard',
  component: UserDashboardComponent,
  pathMatch:'full',
  canActivate:[NormalGuard]
  
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
