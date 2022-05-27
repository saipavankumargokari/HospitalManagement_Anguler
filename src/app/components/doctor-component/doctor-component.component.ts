import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../../model/doctor';
import { DoctorServiceService } from '../../service/doctor-service.service';

@Component({
  selector: 'app-doctor-component',
  templateUrl: './doctor-component.component.html',
  styleUrls: ['./doctor-component.component.css']
})
export class DoctorComponentComponent implements OnInit {
  
  doctors: Doctor[];
  doctor: Doctor = new Doctor();

  constructor(private doctorservice: DoctorServiceService,private router :Router) { }

  ngOnInit(): void {
    this.doctorservice.getDoctorList().subscribe(data => {
      this.doctors=data;
    })
  }

  showdoc(name:string){
   this.router.navigate([`showdoc`,name]);
   console.log(name);
  }

}
