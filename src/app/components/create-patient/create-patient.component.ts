import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/model/doctor';
import { Patient } from 'src/app/model/patient';
import { DoctorServiceService } from 'src/app/service/doctor-service.service';
import { PatientServiceService } from 'src/app/service/patient-service.service';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  patient: Patient = new Patient();
  doctors:Doctor[];


  constructor(private patientService: PatientServiceService, private doctorService: DoctorServiceService) { }

  ngOnInit(): void {
    this.doctorService.getDoctorList().subscribe(data => {
      this.doctors=data;
    })
  }
  
  savePatient(){
    this.patientService.createPatient(this.patient).subscribe(data => {
      console.log(data);
      window.alert("Added Patient Successfully !");
  },
  error => console.error());

  }

  onSubmit(){
    console.log(this.patient);
    this.savePatient();
  }
}
