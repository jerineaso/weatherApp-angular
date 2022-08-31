import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Weather, weatherData } from './models/weather.model'

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http : HttpClient) { }

  getCity(cityName: string): Observable<weatherData>{
    return this.http.get<weatherData>(environment.url,{
      params: new HttpParams()
      .set('q',cityName)
      .set('units','metric')
      .set('appid', environment.appid)
    });
  }
}
