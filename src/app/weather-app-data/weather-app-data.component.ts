import { Component, Input, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { weatherData } from '../models/weather.model'


@Component({
  selector: 'app-weather-app-data',
  templateUrl: './weather-app-data.component.html',
  styleUrls: ['./weather-app-data.component.scss']
})
export class WeatherAppDataComponent implements OnInit {

  @Input() data : any

  weatherData?: weatherData;

  constructor( private location : LocationService) { }

  ngOnInit(): void {
    setTimeout(() => {
    console.log(this.data);

    }, 1000);
    this.location.getCity(this.data).subscribe((res)=>{
      console.log(res);
      this.weatherData = res
    })
  }
}
