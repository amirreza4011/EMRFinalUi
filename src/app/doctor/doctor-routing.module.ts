import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorDashboardComponent} from './../doctor/doctor-dashboard/doctor-dashboard.component';
import { PrescriptionComponent} from './prescription/prescription.component';
import { LaboratoryRequestComponent} from './../doctor/laboratory-request/laboratory-request.component';
import {DrugRecordComponent} from './drug-record/drug-record.component';
import {LabRecordComponent} from './lab-record/lab-record.component';
import {DrugOrderComponent} from './drug-order/drug-order.component';
import {NewPrescriptionComponent} from './new-prescription/new-prescription.component';
import {HomePageComponent} from './home-page/home-page.component';
import  { ShowResultTableComponent} from './show-result-table/show-result-table.component';
import {WaitngPageComponent} from './waitng-page/waitng-page.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'patientList',
        component: DoctorDashboardComponent,
        data: {
          title: 'doctor Dashboard'
        }
      },
      {
        path: 'prescription',
        component: PrescriptionComponent ,
        data: {
          title: 'prescription'
        }
      },
      {
        path: 'laboratoryRequest',
        component: LaboratoryRequestComponent ,
        data: {
          title: 'Laboratory Request'
        }
      },
      {
        path: 'drugRecord',
        component: DrugRecordComponent ,
        data: {
          title: 'Drug Reord'
        }
      },
      {
        path: 'labRecord',
        component: LabRecordComponent ,
        data: {
          title: 'Lab Record'
        }
      },
      {
        path: 'drugOrder',
        component: DrugOrderComponent,
        data : {
          title: 'Drug Order'
      }
      },
      {
        path: 'NewPrescription/:',
        component: NewPrescriptionComponent,
        data : {
          title: 'New Prescription'
        }
      },
      {
        path: 'homePage/:id',
        component: HomePageComponent,
        data : {
          title: 'Home Page'
        },
      },

      {
        path: 'showResult',
        component: ShowResultTableComponent,
        data: {
          title: 'Show Result'
        }
      },
      {
        path: 'waiting',
        component: WaitngPageComponent,
        data: {
          title: 'Waiting'
        }
      }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class doctorRoutingModule { }
