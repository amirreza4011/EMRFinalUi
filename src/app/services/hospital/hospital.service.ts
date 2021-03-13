import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import namedata from 'assets/config/config.json';


@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  private hospitalUrl= namedata.API_URL.toString() + '/api/Hospital/HospitalInformation ';
  tok="";
  constructor(private http: HttpClient) { }
  getAll( ): Observable <any> {
    if (localStorage.getItem('token') == null ) {
       this.tok = localStorage.getItem('userToken');
    } else
    {
      this.tok = localStorage.getItem('token');

    }
    const headerDict = {
      // tslint:disable-next-line:max-line-length
      'Authorization': 'Bearer  ' +  this.tok,
    }

    return this.http.get<any>(this.hospitalUrl, {
      headers: headerDict
    });

  }
}


