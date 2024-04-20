import { Component } from '@angular/core';
import { HealthService } from '../health.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-diet-plan',
  templateUrl: './diet-plan.component.html',
  styleUrls: ['./diet-plan.component.css'],
  animations: [
    trigger('myAnimation', [
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateY(-100%)'
        }),
        animate('300ms ease-in')
      ]),
      transition('* => void', [
        animate('300ms ease-out', style({
          opacity: 0,
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]
})

export class DietPlanComponent {
  DietItems: any;
  Totalcalories: any;
  totalProtien: any;
  table: boolean = true;
  constructor(private service: HealthService) {
    this.DietItems = service.GetDietItems();
    this.calculateTotalCalories();
    console.log("items"+this.DietItems);
  }

  calculateTotalCalories() {
    this.Totalcalories = this.DietItems.reduce((total: number, DietItems: any) => {
      return total + DietItems.calories;
    }, 0);
    console.log(this.Totalcalories);
    
  }

  // calculateTotalProtien() {
  //   this.totalProtien = this.DietItems.reduce((total: number, DietItems: any) => {
  //     return total + DietItems.calories;
  //   }, 0);
  //   console.log(this.Totalcalories);

  // }

  check(){
    if(this.DietItems > 0)
      this.table = true;
    
  }



  DeleteDietItem(data: any) {
    const i = this.DietItems.findIndex((element: any) => {
      return element.id == data.id;
    });
    
    this.DietItems.splice(i, 1);
    this.calculateTotalCalories();
  }
}


