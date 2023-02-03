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

  getAllPersonalInfo(limit: number, skip: number): Observable<any> {
    return this.http.get(`${this.EndPoint}/personal-info?limit=${limit}&skip=${skip}`);
  }

  delete(id: number): Observable<any> {
    // get users from api
    return this.http.delete(`${this.EndPoint}/personal-info/delete/${id}`);
  }

  update(id: number, data: any) {
    return this.http.put(this.EndPoint + '/update/' + id, data)
  }
}
