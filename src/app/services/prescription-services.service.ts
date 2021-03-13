import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {json} from 'ng2-validation/dist/json';
import {tap} from 'rxjs/operators';
import namedata from 'assets/config/config.json';


@Injectable({
  providedIn: 'root'
})
export class PrescriptionServicesService {
  private Url = namedata.API_URL.toString() + '/api/DrugStore/Get_PharmacyList';
  private Urldrug =  namedata.API_URL.toString() + '/api/DrugStore/Get_SalableList';
  private Urlinsert =  namedata.API_URL.toString() + '/api/DrugStore/Create_New_WardRequest';
  private favUrl = namedata.API_URL.toString() + '/api/DrugStore/Create_New_Practitioner_Drug_Favorite'
  constructor(private http: HttpClient) { }
 getService(): Observable <any> {

   const headerDict = {

     'Authorization': 'Bearer  ' + localStorage.getItem('token'),
   }
   return this.http.get<any>(this.Url, {
     headers: headerDict
 })
}
    getdruglist(id: any): Observable <any> {
        const data = {
            'deptID': id
        };
        const body = JSON.stringify(data );
        const headerDict = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer  ' + localStorage.getItem('token')
        }
        return this.http.post<any>(this.favUrl, body, {
            headers: headerDict
        })
    }
    favariteList(item:any): Observable <any> {
        const data = {
            'jsonValue': localStorage.getItem('item'),
        }
        alert(data)
        const body = JSON.stringify(data );
        const headerDict = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer  ' + localStorage.getItem('token')
        }
        console.log(body);
        return this.http.post<any>(this.Urlinsert, body, {
            headers: headerDict
        })
    }
    inserdruglist(list: any): Observable <any> {
        alert(list);
       const data = {
            'id': '',
            'pharmacyID': '2089',
            'prescriberID': '',
            'wardLocID': '',
            'encountrID': localStorage.getItem('encounterID'),
            'dateof': '',
            'reqPriorIX': '0',
            'requestStatusIX': '1',
            'reqACLUser': '',
            'dueDate': '',
            'createdBy': '',
            'approvedBy': '',
            'typeIS': '',
            'wardRequestItems': list

                // 'id': '',
                // 'salableID': '45',
                // 'wardRequestID': '',
                // 'qty': '55',
                // 'isnis': '0',
                // 'packagingID': '',
                // 'reorderLimitDay': '0',
                // 'isRequested': '',
                // 'frequencyUsageID': '',
                // 'routeUsageID': ''


        }
        const body = JSON.stringify(data );
        const headerDict = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer  ' + localStorage.getItem('token')
        }
        console.log(body);
        return this.http.post<any>(this.Urlinsert, body, {
            headers: headerDict
        })
    }

}
