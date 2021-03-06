import { Component, OnInit } from '@angular/core';
import {IPersonServiceService} from '../../services/i-person-service.service';
import {HospitalService} from '../../services/hospital/hospital.service';
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  personInfo : any[];
  html:any

  constructor(
      private  _service: IPersonServiceService,
      private _html: HospitalService,
  ) { }

  ngOnInit() {
    this._service.getData().subscribe(res => {
      this.personInfo = res;
    });
    this._html.getAll().subscribe(res =>{
      this.html = res.reportxslHeader
    })
  }

}
