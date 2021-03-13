import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService} from './../../../services/login-service.service'

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})


export class LoginPageComponent {
    private currentPage: string;
     Result: any;
     paid: number;
     orderid: number;
     password: any;
     userName: string;
     errorMassage:any;
    constructor(private router: Router,
                private route: ActivatedRoute,
                private _service: LoginServiceService,
              ) { }


    showPage(page: string) {
        this.currentPage = page;
    }

    // tslint:disable-next-line:use-lifecycle-interface
    ngOnInit() {
        localStorage.removeItem('page');
       this.showPage('doctorLogin');
    }
    onSubmit(event: any) {
     this.paid = event.target.code.value;
     this.orderid = event.target.shenase.value;
      this._service.patientLogin(this.paid.toString(), this.orderid.toString()).subscribe(res => {

              localStorage.setItem('userToken', res.accessToken);
              localStorage.setItem('encounterid', this.orderid.toString());
              localStorage.setItem('type', '1' );
              this.router.navigate(['/dashboard/printAll/']);
              this.Result = res.errorMessage;
     });
    }
    doctorLogin(event: any) {
        this.userName = event.target.username.value;
        this.password = event.target.password.value;

        this._service.doctor(this.userName, this.password).subscribe(res => {
            localStorage.setItem('token', res.accessToken);
            localStorage.setItem('type', '0');
            if (res.accessToken.length>0) {
                this.router.navigate(['/DoctorDashboard/patientList']);
            }
          else {
              this.errorMassage = res.errorMessage
            }
        })
    }
}

