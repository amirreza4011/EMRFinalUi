import {Component, Input, OnInit} from '@angular/core';
import {PrescriptionServicesService} from '../../services/prescription-services.service';
import { Output, EventEmitter } from '@angular/core';
import {json} from 'ng2-validation/dist/json';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.scss']
})
export class PatientInfoComponent implements OnInit {
 @Output() public  childData = new EventEmitter();
    @Input() public  visibility: boolean = true;
     show = 1;
     title = 'jdhfjkf';
     list: any[];
     id1 = '';
     listdrug:any[];
  constructor(private router: Router,
      private  _service: PrescriptionServicesService,
      private route: ActivatedRoute,
  ) { }
  getID(value: string) {
        this.id1 = value;

    }
    newPres(){
        this.router.navigate(['/DoctorDashboard/NewPrescription/' + this.id1]);
    }

  ngOnInit() {


    this._service.getService().subscribe( res => {
      this.list = res;
    })
  }

}
