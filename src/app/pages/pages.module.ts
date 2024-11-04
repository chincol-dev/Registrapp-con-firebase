import {SingInComponent} from './auth/sing-in/sing-in.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {SingUpComponent} from './auth/sing-up/sing-up.component';
import {ForgotPasswordComponent} from './auth/forgot-password/forgot-password.component';
import {StudentComponent} from './student/student.component';
import {TeacherComponent} from './teacher/teacher.component';
import {SharedModule} from '../shared/shared.module';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TestsComponent} from "./tests/tests.component";
import {QrCodeComponent} from "../qr-code/qr-code.component";
import {ClasesListComponent} from "../clases-list/clases-list.component";


@NgModule({
  declarations: [
    SingUpComponent,
    SingInComponent,
    ForgotPasswordComponent,
    StudentComponent,
    TeacherComponent,
    TestsComponent,
    ClasesListComponent
  ]
  ,
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    QrCodeComponent
  ]
})
export class PagesModule {
}
