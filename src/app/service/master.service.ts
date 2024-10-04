import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponceModel, Application } from '../model/application.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http : HttpClient) { }

  // this function will make api call and whatever the data we are getting it will return
  // Observable : first import this data and mention what type are data are you going to send 
  //<ApiResponceModel> : we are getting api responce in thso format
  // when we are appiering for machine test this sholud be our call look like 
  addNewApplication(obj : Application) : Observable<ApiResponceModel> {
    return this.http.post<ApiResponceModel>("https://projectapi.gerasim.in/api/Loan/AddNewApplication", obj)
  }
}
