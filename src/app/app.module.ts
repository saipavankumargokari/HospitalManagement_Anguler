import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorComponentComponent } from './components/doctor-component/doctor-component.component';
import { PatientComponentComponent } from './components/patient-component/patient-component.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateDoctorComponent } from './components/create-doctor/create-doctor.component';
import { CreatePatientComponent } from './components/create-patient/create-patient.component';
import { FormsModule } from '@angular/forms';
import { ShowDoctorInfoComponent } from './components/show-doctor-info/show-doctor-info.component';
import { ShowPatientInfoComponent } from './components/show-patient-info/show-patient-info.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponentComponent,
    PatientComponentComponent,
    NotFoundComponent,
    HomeComponent,
    HeaderComponent,
    CreateDoctorComponent,
    CreatePatientComponent,
    ShowDoctorInfoComponent,
    ShowPatientInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
