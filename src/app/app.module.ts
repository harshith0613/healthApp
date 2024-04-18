import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import{HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LunchComponent } from './lunch/lunch.component';
import { SnacksComponent } from './snacks/snacks.component';
import { MatCardModule } from '@angular/material/card';
import { DietPlanComponent } from './diet-plan/diet-plan.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LunchComponent,
    SnacksComponent,
    DietPlanComponent,
    LandingpageComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
