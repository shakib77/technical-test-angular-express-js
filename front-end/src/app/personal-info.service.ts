import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {

  private EndPoint = `http://localhost:1339/api/v1`;

  constructor(private http: HttpClient) { }

  getAllCountry() {
    return this.http.get(`${this.EndPoint}/country`);
  }
}
