import { Component } from '@angular/core';
import { HealthService } from '../health.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  DietItems:any;
  constructor(private service: HealthService, private router: Router)
  {
    this.DietItems=service.DietItems; 
  }


}
