import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigurationService} from './Config/configuration.service';
import namedata from 'assets/config/config.json';

@Injectable({
  providedIn: 'root'
})

// class for login
export class LoginServiceService {
  private  LoginUrl =  namedata.API_URL.toString() + '/api/Authenticate/login';
  constructor(private http: HttpClient,
              private _Config: ConfigurationService
              ) {

  }

  // doctor login function
  doctor(username: string, password: string) {
    const data = {
      'username': username,
      'password': password,
      'type': '0',
    };
    const body = JSON.stringify(data );
    const headers = {  'Content-Type': 'application/json' };
    const headerDict = {
      'Content-Type': 'application/json',
    }
    const requestOptions = {
      headers: new Headers(headerDict),
    };
    return this.http.post<any>(this.LoginUrl, body, {
      headers: headerDict
    });


  }
  // user login function
  patientLogin(username: string, password: string, ) {

    const data = {
      'username': username,
      'password': password,
      'type': '1',
    };
    const body = JSON.stringify(data );

    const headers = {  'Content-Type': 'application/json' };
    const headerDict = {
      'Content-Type': 'application/json',
    }
    const requestOptions = {
      headers: new Headers(headerDict),
    };
    return   this.http.post<any>(this.LoginUrl, body, {
      headers: headerDict
    });


  }
}








