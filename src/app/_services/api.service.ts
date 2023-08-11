import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from '../_models/vehicle.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  _apiUrl = 'http://localhost:8089/vehicle';

  constructor(private _http: HttpClient) {}

  getVehicleList(): Observable<Vehicle[]> {
    return this._http.get<Vehicle[]>(this._apiUrl + '/get');
  }

  deleteVehicle(id: number): Observable<string> {
    return this._http.delete<string>(this._apiUrl + `/delete/${id}`)
  }
}
