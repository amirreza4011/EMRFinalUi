import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { LabReqService} from './../../services/labratoryRequest/lab-req.service'



export class Country {
  constructor(public name: string, public code: string) {}
}
@Component({
  selector: 'app-laboratory-request',
  templateUrl: './laboratory-request.component.html',
  styleUrls: ['./laboratory-request.component.scss']
})
export class LaboratoryRequestComponent implements OnInit {
  testName='';
  myControl = new FormControl();
  serchlist = new Array();
  listdrug: any[];
  name:any = [];
  value='';



  testnameList ='';
  constructor(
      private modalService: NgbModal,
      private _labReq : LabReqService,
  ) {
}
  GetDetails(content) {

    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
    }, (reason) => {
    });
  }


  ngOnInit() {
    return this._labReq.getTestName().subscribe(res =>{
      this.listdrug=res;
        }
    )
  }
  onSearchChange(event: any) {
    const key = event.target.value;
    this.name=key;
    this.serchlist=[];
    this.listdrug.forEach(item => {
      if(key == ""){
        this.serchlist=[];
      }
      if (key != '' ) {
        const f =  item.name.toLowerCase().substring(0, key.length);
        if (key === f) {
          this.serchlist.push(item.name)

        }

      }
    });
    console.log(this.serchlist);

  }
  set(d:any){
    this.value=d;
  }


}
