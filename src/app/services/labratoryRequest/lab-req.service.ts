import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/observable';
import namedata from '../../../assets/config/config.json';

@Injectable({
  providedIn: 'root'
})
export class LabReqService {
  private  testNameUrl = namedata.API_URL.toString() + '/api/Laboratory/Get_Laboratory_MasterService';

  constructor( private  http: HttpClient) { }
  getTestName(): Observable<any>
  {
    const headerDict = {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
    const requestOptions = {
      headers: new Headers(headerDict),
    };
    return   this.http.get<any>(this.testNameUrl, {
      headers: headerDict
    });

  }
}
