import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/compat/firestore'
import { environment } from 'src/environments/environment';
import { MaterialModule } from './material/material/material.module';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ApplicationComponent } from './application/application.component';
import { LoginComponent } from './component/auth/login/login.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SignupComponent } from './component/auth/signup/signup.component';
import { ServiceService } from './shared/service.service';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { DetailsComponent } from './details/details.component'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { PatientsComponent } from './patients/patients.component';
import { DoctorsListViewComponent } from './doctors-list-view/doctors-list-view.component';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    ApplicationComponent,
    LoginComponent,
    SignupComponent,
    DetailsComponent,
    PatientsComponent,
    DoctorsListViewComponent
  ],
  imports: [
    NgxChartsModule,
    MatTableModule,
    MatSnackBarModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MaterialModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    FormsModule,
    MatButtonModule,
    MatSidenavModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
