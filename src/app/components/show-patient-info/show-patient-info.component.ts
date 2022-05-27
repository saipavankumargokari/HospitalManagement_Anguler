import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/model/patient';
import { PatientServiceService } from 'src/app/service/patient-service.service';


@Component({
  selector: 'app-show-patient-info',
  templateUrl: './show-patient-info.component.html',
  styleUrls: ['./show-patient-info.component.css']
})
export class ShowPatientInfoComponent implements OnInit {

  patient: Patient = new Patient();
  id: number;
  err:string;

  constructor(private ps:PatientServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.ps.getPatientId(this.id).subscribe(data => {
      this.patient=data;
    },error=>{
      this.err = error;
      window.alert(this.err+this.id)}
      );

  }

}
