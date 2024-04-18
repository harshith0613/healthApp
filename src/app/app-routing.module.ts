import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component'
import { LunchComponent } from './lunch/lunch.component';
import { DietPlanComponent } from './diet-plan/diet-plan.component';
import { SnacksComponent } from './snacks/snacks.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const routes: Routes = [

  {path: '', component:LandingpageComponent},
  {path:"landingpage",component:LandingpageComponent},
  {path:"lunch",component:LunchComponent},
  {path:"DietPlan",component:DietPlanComponent},
  {path:"snacks",component:SnacksComponent},
  {path:"DietItem",component:DietPlanComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserAnimationsModule],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }