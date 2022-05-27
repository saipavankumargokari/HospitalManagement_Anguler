import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/model/doctor';
import { Patient } from 'src/app/model/patient';
import { DoctorServiceService } from 'src/app/service/doctor-service.service';
import { PatientServiceService } from 'src/app/service/patient-service.service';

@Component({
  selector: 'app-show-doctor-info',
  templateUrl: './show-doctor-info.component.html',
  styleUrls: ['./show-doctor-info.component.css']
})
export class ShowDoctorInfoComponent implements OnInit {

  doctor: Doctor = new Doctor();
  patient: Patient = new Patient();
  name: string;
  npatients: number;

  constructor(private doctorservice: DoctorServiceService,private patientService:PatientServiceService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
    this.doctorservice.getDoctor(this.name).subscribe(data => {
     this.doctor = data;
     });
     this.patientService.getPatientVisited(this.name).subscribe(data => {
       this.npatients=data;
     });    
  }

}
