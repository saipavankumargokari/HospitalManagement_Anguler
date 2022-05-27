import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Patient } from '../model/patient';



@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {


  private baseURL='http://localhost:8080'

  constructor(private httpclient: HttpClient) { }


  getPatientList(): Observable<Patient[]>{
    return this.httpclient.get<Patient[]>(`http://localhost:8080/patient/all`)
  }

  createPatient(patient:Patient): Observable<any>{
    return this.httpclient.post(`${this.baseURL}/patient/add`,patient);
  }

  getPatientVisited(name: string): Observable<any>{
    return this.httpclient.get(`${this.baseURL}/patient/find/${name}`);
  }

  getPatientId(id:number): Observable<any>{
    return this.httpclient.get(`${this.baseURL}/patient/${id}`).pipe(catchError(this.handleError));
                              
  }

  handleError(error){
    return throwError(error.message="Patient not Found with the id: ");
  }

}

