import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {

  private EndPoint = `http://localhost:1339/api/v1`;

  constructor(
    private http: HttpClient,
  ) {
  }

  getAllCountry() {
    return this.http.get(`${this.EndPoint}/country`);
  }

  getAllCity(countryId: number) {
    return this.http.get(`${this.EndPoint}/cities/${countryId}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.EndPoint + '/personal-info/create', data);
  }
}
