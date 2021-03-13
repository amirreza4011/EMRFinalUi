import { Component, OnInit } from '@angular/core';
import { NgbDatepicker} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Route, Router} from '@angular/router';
import { PatientListServiceService} from './../../services/patient-list-service.service'
import {number} from 'ng2-validation/dist/number';


@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.scss']
})
export class DoctorDashboardComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dateObject  = '';
  start = '';
  end = '';
  isviseted = '';
  dateObject1 = '';
  result: any [];
  resultcopy: any[];
  nationalCOde: any = '';
  encounterId: any;
  data = '';
  constructor(private router: Router,
              private route: ActivatedRoute,
              private  _service: PatientListServiceService
  ) {
    if (localStorage.getItem('token') == null) {
      this.router.navigate(['/pages/login']);
    }
  }

  postDatestartdate(event: any) {
    this.start = event;
  }
  postDateenddate(event: any) {
    this.end = event;
  }
  postDate(event: any) {
    this.isviseted = event.target.chekvi.value;
    this.nationalCOde = event.target.nationalCode.value;
    this._service.postPractitioner(this.start, this.end, this.isviseted, this.nationalCOde).subscribe(res => {
      this.result = res;
      console.log(res)
        })
  }
  onSearchChange(event: any): void {

   const y = event.target.value;

   this.result['outPatients'].forEach(item => {

     if (y != '' && y === item.patient_NationalCode ) {
       this.result = [];
       this.resultcopy = item;


     }
   })
    console.log(this.resultcopy)
  }
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    localStorage.setItem('page', '1');

    this._service.getList().subscribe( res => {
      this.result = res;

    })
  }
}
