import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { GetAll} from './../DTO/getAll' ;
import namedata from 'assets/config/config.json';

@Injectable({
  providedIn: 'root'
})
export class GetAllService {
  private url: string = namedata.API_URL.toString() + '/api/Laboratory/Laboratory_Request';


  constructor(private http: HttpClient) { }
  getAll( ): Observable <any> {
    const headerDict = {
      'Authorization': 'Bearer  ' + localStorage.getItem('userToken')
    }
    return this.http.get<any>(this.url, {
      headers: headerDict
    });

  }


}
