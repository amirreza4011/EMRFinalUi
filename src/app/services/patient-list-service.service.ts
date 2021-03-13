import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ILogin} from '../DTO/ILogin';
import namedata from 'assets/config/config.json';


@Injectable({
  providedIn: 'root'
})
export class PatientListServiceService {

 private Url =  namedata.API_URL.toString() + '/api/EMR/Get_Practitioner_ToDay_OutPatient';
 private PractitionerUrl =   namedata.API_URL.toString() + '/api/EMR/Get_Practitioner_OutPatient_List';
  constructor(private http: HttpClient) {
  }
  getList(): Observable<any> {
    const headerDict = {
      'Authorization': 'Bearer  ' + localStorage.getItem('token')
    }
    return this.http.get<any>(this.Url, {
      headers: headerDict
    });
  }
    postPractitioner(PersianStartDateFrom : string, PersianStartDateTo : string, isVisited:string, Patient_NationalCode:string) {
        const data = {
            'PersianStartDateFrom': PersianStartDateFrom,
            'PersianStartDateTo': PersianStartDateTo,
            'IsVisited': isVisited,
            'Patient_NationalCode': Patient_NationalCode,
        };
            alert(data)
        const body = JSON.stringify(data );
        const headers = {  'Content-Type': 'application/json' };
        const headerDict = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer  ' + localStorage.getItem('token')
        }

        const requestOptions = {
            headers: new Headers(headerDict),
        };

        return   this.http.post<any>(this.PractitionerUrl, body, {
            headers: headerDict
        });


    }
}
