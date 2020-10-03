import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { WeatherService } from "../weather.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public searchForm: FormGroup;
  public weatherData: any = {"request":{"type":"City","query":"Kolkata, India","language":"en","unit":"m"},"location":{"name":"Kolkata","country":"India","region":"West Bengal","lat":"22.570","lon":"88.370","timezone_id":"Asia\/Kolkata","localtime":"2020-10-03 11:57","localtime_epoch":1601726220,"utc_offset":"5.50"},"current":{"observation_time":"06:27 AM","temperature":29,"weather_code":386,"weather_icons":["https:\/\/assets.weatherstack.com\/images\/wsymbols01_png_64\/wsymbol_0016_thundery_showers.png"],"weather_descriptions":["Light Rain, Rain With Thunderstorm"],"wind_speed":6,"wind_degree":40,"wind_dir":"NE","pressure":1005,"precip":0,"humidity":94,"cloudcover":75,"feelslike":33,"uv_index":8,"visibility":4,"is_day":"yes"}};
  public apiError: Boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: WeatherService
  ) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      location: [""]
    });
  }

  getWeather(formValues) {
    console.log(formValues);
    this.service.getWeather(formValues.location).subscribe((data:any) => {
      if(data.current){
        this.weatherData = data;
      }else {
        this.apiError = true;
        setTimeout(() => {
          this.apiError = false;
        }, 3500);
      }
    });
  }

}
