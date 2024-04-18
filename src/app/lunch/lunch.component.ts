import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HealthService } from '../health.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent {
  product: any;

  constructor(private service: HealthService, private http: HttpClient){

  }

  ngOnInit(): void {
    this.http.get<any[]>('/assets/lunch.json')
      .subscribe(lunch => {
        this.product = lunch;
      });
  }


  AddtoDiet(data:any){
    this.service.AddtoDiet(data);
  }
}
