import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { doc, Firestore, setDoc } from '@angular/fire/firestore'
import { from } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private auth: AngularFireAuth, private _snackBar: MatSnackBar,
    private router: Router,
  ) { }

  signUp(email: any, password: any) {
    return from(
      this.auth.createUserWithEmailAndPassword(email, password).then((userCred) => {
        this.auth.authState.subscribe((async user => {
          if (user) {
            localStorage.setItem('user', JSON.stringify(user))
            this._snackBar.open('Sign Up Succesfully', 'close');
            await this.router.navigate(['/application/dashboard']);
            location.reload();
          }
        }))
      })
    )
  }
  login(username: any, password: any) {
    this.auth.signInWithEmailAndPassword(username, password).then(result => {
      this.auth.authState.subscribe((async user => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user))
          this._snackBar.open('logged In Succesfully', 'close');
          await this.router.navigate(['/application/dashboard']);
          location.reload();
        }
      }))
    }).catch((err => {
      console.log(err)
      this._snackBar.open('Something Went Wrong', 'close');
    }))
  }
  logout() {
    localStorage.removeItem('user');
    location.reload();
  }
  isUserLoggedIn() {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null ? true : false;
  }
  addUser(user: any) {
    // const ref=doc(this.firestore,"users",user.uid)
    // return from(setDoc(ref,user))
  }
}
