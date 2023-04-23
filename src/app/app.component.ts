import { Component, OnInit } from '@angular/core';
import { min } from 'rxjs';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public temp : number = 0 ;
  public minTemp : number = 0 ;
  public maxTemp : number = 0 ;
  public humidity : number = 0 ;
  public wind : number = 0 ;
  public cityName : string = 'Karachi';
  weatherDetails : any;


  constructor(private weatherService : WeatherService){}

  ngOnInit():void{
    this.getweatherDetails(this.cityName);
    this.cityName='';
  }
  onSubmit(){
    this.getweatherDetails(this.cityName);
    this.cityName='';
  }


  getweatherDetails(cityName:string){
    this.weatherService.getweather(cityName).subscribe({
      next : (res)=>{
        console.log(res);
        this.weatherDetails = res;
        this.temp = this.weatherDetails.main.temp;
        this.minTemp = this.weatherDetails.main.temp_min;
        this.maxTemp = this.weatherDetails.main.temp_max;
        this.humidity = this.weatherDetails.main.humidity;
        this.wind = this.weatherDetails.wind.speed;

      }
    })
  }
}
