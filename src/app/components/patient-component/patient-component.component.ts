import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientServiceService } from 'src/app/service/patient-service.service';

@Component({
  selector: 'app-patient-component',
  templateUrl: './patient-component.component.html',
  styleUrls: ['./patient-component.component.css']
})
export class PatientComponentComponent implements OnInit {

  id: number;
  constructor(private patientService:PatientServiceService, private router :Router) { }

  ngOnInit(): void {
  }

  showpatient(id:number){
    this.router.navigate([`showpatient`,id]);
   }

}
