import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingInComponent } from './auth/sing-in/sing-in.component';
import { SingUpComponent } from './auth/sing-up/sing-up.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import {TestsComponent} from "./tests/tests.component";


const routes: Routes = [
  {path:'sing-in',component:SingInComponent},
  {path:'sing-up',component:SingUpComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'student',component:StudentComponent},
  {path:'teacher',component:TeacherComponent},
  {path:'test',component:TestsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
