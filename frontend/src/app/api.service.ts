import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apisJsonFilePath = "assets/apis.json";
  apis = {
    "base_url":"http://localhost:8080",
    "login": {
        "url":"/signin"
    },
    "registration": {
        "url":"/registration"
    }
  };

  constructor(private http: HttpClient) {}

  post(url, body) {
    return this.http.post(this.apis["base_url"] + url, body);
  }

}
