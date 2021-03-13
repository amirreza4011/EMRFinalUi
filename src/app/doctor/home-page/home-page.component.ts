import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  encounterId='';
  constructor(  private route: ActivatedRoute,) {
  }

  ngOnInit() {
    localStorage.setItem('page','2')
    this.route.paramMap.subscribe(params => {
      this.encounterId = params.get('encounterID');
      localStorage.setItem('encounterID', this.encounterId);
    });
  }

}
