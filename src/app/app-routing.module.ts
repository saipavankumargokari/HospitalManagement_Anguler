import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDoctorComponent } from './components/create-doctor/create-doctor.component';
import { CreatePatientComponent } from './components/create-patient/create-patient.component';
import { DoctorComponentComponent } from './components/doctor-component/doctor-component.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PatientComponentComponent } from './components/patient-component/patient-component.component';
import { ShowDoctorInfoComponent } from './components/show-doctor-info/show-doctor-info.component';
import { ShowPatientInfoComponent } from './components/show-patient-info/show-patient-info.component';

const routes: Routes = [

  {path:'home',component: HomeComponent},
  {path:'doctor', component: DoctorComponentComponent},
  {path:'patient', component:PatientComponentComponent},
  {path:'create-doctor', component:CreateDoctorComponent},
  {path:'create-patient', component:CreatePatientComponent},
  {path:'showdoc/:name',component:ShowDoctorInfoComponent},
  {path:'showpatient/:id',component:ShowPatientInfoComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
