import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PrescriptionServicesService} from '../../services/prescription-services.service';
import {FormControl} from '@angular/forms';
import {json} from 'ng2-validation/dist/json';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-prescription',
  templateUrl: './new-prescription.component.html',
  styleUrls: ['./new-prescription.component.scss']
})
export class NewPrescriptionComponent implements OnInit {
  list1: any;
  pharmacy = '';
  listdrug: any[];
  term: '';
  serchlist = new Array();
  value='';
  addtempdrug=new Array();
  Frequency='';
  Dispense='';
  Dose='';
  id1='';
  qualifier='';
  Administration='';
  Duration='';
  Direction='';
  myControl = new FormControl();
  DAW:boolean;
  doseText='';
  DurationText='';
  dispenseText='';
  route1='';
  listItem:any;
  myform:any;
  title="";
  favariteList:any[];
  constructor(
      private route: ActivatedRoute,
      private  _service: PrescriptionServicesService,
      private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.listItem=[];
    this.route.paramMap.subscribe(params => {
      this.pharmacy = params.get('');
      this._service.getdruglist(this.pharmacy).subscribe( res => {
        this.listdrug = res;

      })
    });
  }
  onSearchChange(event: any) {

   const key = event.target.value;
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

  }
  set(d:any){
    this.value=d;
    this.serchlist=[];
  }
  sendData(event:any){
    this.id1 = event.target.drugName.value;
    this.Direction=event.target.Direction.value;
    this.DAW= true;
    this.doseText = event.target.doseText.value;
    this.DurationText = event.target.DurationText.value;
    this.dispenseText = event.target.dispenseText.value;
   var content={
     'drugname': this.id1,
     'Frequency': this.Frequency,
     'doseText': this.doseText +""+this.Dose ,
     'qualifier': this.qualifier,
     'Administration': this.Administration,
     'Duration':this.DurationText + this.Duration,
     'Dispense': this.dispenseText + this.Dispense,
     'Direction': this.Direction,
     'route1': this.route1,
     'DAW': this.DAW,
      'pharmecyid':this.pharmacy,

    };
   localStorage.setItem('item',JSON.stringify(content));
    alert()
    this.listItem.push(content);
   this.id1='';
  }
  getFrequency(value: any) {
    this.Frequency = value;
  }
  getDose(value: any){
    this.Dose= value;
  }
  getQualifier(value: any){
    this.qualifier= value;
  }
  getAdministration(value: any){
    this.Administration = value;
  }
  getDuration(value:any){
    this.Duration= value;
  }
  getDispense(value:any){
    this.Dispense= value;
  }
  getRoute(value:any){
    this.route1= value;
  }

  savedata(){
     this._service.inserdruglist(this.listItem).subscribe(res => {
       alert(res.errorMessage);
     })
  }
  GetDetails(content) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
    }, (reason) => {
    });
  }
  favLIst() {
    this.favariteList = this.listItem;
    alert(this.favariteList);
    this._service.favariteList(this.favariteList).subscribe(res => {
      console.log(res)
    })
  }



}

