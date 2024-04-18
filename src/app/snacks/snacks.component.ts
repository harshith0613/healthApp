import { Component } from '@angular/core';
import { HealthService } from '../health.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.css']
})
export class SnacksComponent {
  product: any;
  constructor(private http: HttpClient, private service:HealthService) { }

  ngOnInit(): void {
    this.http.get<any[]>('/assets/snacks.json')
      .subscribe(snacks => {
        this.product = snacks;
      });
  }


  AddtoDiet(data:any){
    this.service.AddtoDiet(data);
  }
}
