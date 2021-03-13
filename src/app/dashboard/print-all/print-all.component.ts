import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { GetAllService} from './../../services/get-all.service';
import { GetAll} from './../../DTO/getAll';
import { ConfigurationService} from '../../services/Config/configuration.service'


@Component({
  selector: 'app-print-all',
  templateUrl: './print-all.component.html',
  styleUrls: ['./print-all.component.scss']
})
export class PrintAllComponent implements OnInit {
  id: any ;
  type: string;
  hero: GetAll[];
  loding = true;
  url: Object;
  constructor(
      private route: ActivatedRoute,
      private patientService: GetAllService,
      private _config: ConfigurationService,
  ) { }
  getAll(): void {

    this.patientService.getAll()
        .subscribe(res => {
          this.hero = res;
          this.loding = false;
        });
  }


  ngOnInit() {
    this.getAll();
    this.type = localStorage.getItem('type');


  }

}



