import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}

  getWeather(location) {
    return this.http.get(
      "http://api.weatherstack.com/current?access_key=e8eeba108fb71942c81d30f8433d8e59&query=" +
        location
    );
  }
}
