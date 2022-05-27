import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/model/doctor';
import { DoctorServiceService } from 'src/app/service/doctor-service.service';

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent implements OnInit {

  doctor: Doctor = new Doctor();
  constructor(private doctorService: DoctorServiceService) { }


  ngOnInit(): void {
  }

  saveDoctor(){
    this.doctorService.createDoctor(this.doctor).subscribe(data => {
        console.log(data);
        window.alert("Added Doctor Successfully !");
    },
    error => console.error());
  }

  onSubmit(){
    console.log(this.doctor);
    this.saveDoctor();
  }

}
