import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  _formObject=new FormGroup({
    emailFormControl : new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('',[Validators.required])
  })
  constructor(private authApi:ServiceService){}
  // matcher = new MyErrorStateMatcher();
  login(){
    this.authApi.login(this._formObject.value.emailFormControl,this._formObject.value.password)
  }
}
