import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  _formObject=new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    emailFormControl : new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('',[Validators.required])
  })
  constructor(private authApi:ServiceService,
    private router :Router,
   private _snackBar:MatSnackBar){}
  submit(){
   const{emailFormControl,password}= this. _formObject.value
    this.authApi.signUp(emailFormControl,this._formObject.value.password).subscribe((e=>{
      console.log("e",e)
      this._snackBar.open('Sign Up Succesfully', 'close');
      this.router.navigate(['/application/dashboard']);
    }),err=>{
      this._snackBar.open('Something Went Wrong', 'close');
    })
  }
}
