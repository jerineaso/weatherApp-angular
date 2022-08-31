import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-weather-app-container',
  templateUrl: './weather-app-container.component.html',
  styleUrls: ['./weather-app-container.component.scss']
})
export class WeatherAppContainerComponent implements OnInit {

  dataValue : string = ""
  title : string = "Weather App"
  loader : boolean = true

  weatherForm = new FormGroup({
    weather_input : new FormControl()
  })

  constructor() { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.loader = true
  
    this.dataValue = this.weatherForm.value.weather_input
    if(this.dataValue != ""){
      this.loader = false
    }

    this.weatherForm.reset();
  }

}
