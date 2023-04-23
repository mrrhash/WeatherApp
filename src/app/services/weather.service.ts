import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http : HttpClient) { }

  getweather(city:string){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=7ba06ca5f957d92793d259bc4de5ef90&units=metric')

  }
}
