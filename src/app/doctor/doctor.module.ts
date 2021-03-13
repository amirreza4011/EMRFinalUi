import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { doctorRoutingModule} from  './../doctor/doctor-routing.module';
import { PrescriptionComponent } from './prescription/prescription.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { MedicaionsComponent } from './medicaions/medicaions.component';
import { LaboratoryRequestComponent } from './laboratory-request/laboratory-request.component';
import {DpDatePickerModule} from 'ng2-jalali-date-picker';
import {FormsModule, ReactiveFormsModule,} from '@angular/forms';
import { DrugRecordComponent } from './drug-record/drug-record.component';
import { LabRecordComponent } from './lab-record/lab-record.component';
import { DrugOrderComponent } from './drug-order/drug-order.component';
import {FormControl} from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MaterialModule } from './../material.modules';
import { FilterPipe } from './../filters/searchFilter';
import { SearchPipe} from './../filter.pipe';
import { NewPrescriptionComponent } from './new-prescription/new-prescription.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ShowResultTableComponent } from './show-result-table/show-result-table.component';
import { WaitngPageComponent } from './waitng-page/waitng-page.component';
import { DataTablesModule } from "angular-datatables";







@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [DoctorDashboardComponent, PrescriptionComponent, PatientInfoComponent, MedicaionsComponent, LaboratoryRequestComponent, DrugRecordComponent, LabRecordComponent, DrugOrderComponent, FilterPipe, SearchPipe, NewPrescriptionComponent, HomePageComponent, ShowResultTableComponent, WaitngPageComponent],
  imports: [
    CommonModule,
    doctorRoutingModule,
    DpDatePickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MaterialModule,
    DataTablesModule

  ]
})
export class DoctorModule { }
