import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import {DpDatePickerModule} from 'ng2-jalali-date-picker';
import {FormsModule, ReactiveFormsModule,} from '@angular/forms';



import { ContentPagesRoutingModule } from "./content-pages-routing.module";

import { ErrorPageComponent } from "./error/error-page.component";
import { ForgotPasswordPageComponent } from "./forgot-password/forgot-password-page.component";
import { LoginPageComponent } from "./login/login-page.component";
import { RegisterPageComponent } from './register/register-page.component';
import {LogoItemComponent} from './../../logo-item/logo-item.component';
import { AllPatientComponent } from './all-patient/all-patient.component';




@NgModule({
    imports: [
        CommonModule,
        ContentPagesRoutingModule,
        FormsModule   ,
        DpDatePickerModule,


    ],
    declarations: [
        ErrorPageComponent,
        ForgotPasswordPageComponent,
        LoginPageComponent,
        RegisterPageComponent,
        LogoItemComponent,
        AllPatientComponent,

    ]
})
export class ContentPagesModule { }
