import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HealthService {
  DietItems: any;
  constructor(private http: HttpClient) {
    this.DietItems = [];
  }

  AddtoDiet(data: any) {
    this.DietItems.push(data);
  }



  GetDietItems() {
    return this.DietItems;
  }

}
