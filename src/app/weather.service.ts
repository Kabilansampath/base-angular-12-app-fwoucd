import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherService {

  apiKey = '9a3abe15782b7f69b58c4c020d3aee34';

  constructor(private http: HttpClient) { }

  getWeather(city: string) {
    // Add units=metric to the API call to get temperature in Celsius
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`);
  }

}