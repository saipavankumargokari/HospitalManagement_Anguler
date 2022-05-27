import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../model/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {

  private baseURL='http://localhost:8080'
  constructor(private httpclient: HttpClient) { }

  getDoctorList(): Observable<Doctor[]>{
    return this.httpclient.get<Doctor[]>(`http://localhost:8080/doctor/all`);
  }

  createDoctor(doctor:Doctor): Observable<any>{
    return this.httpclient.post(`${this.baseURL}/doctor/add`,doctor);
  }
  getDoctor(name :string): Observable<any>{
    return this.httpclient.get<Doctor>(`${this.baseURL}/doctor/find/${name}`);
  }


}
