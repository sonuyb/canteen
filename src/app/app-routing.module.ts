import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeveragespageComponent } from './pages/beveragespage/beveragespage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { menupageComponent } from './pages/menupage/menupage.component';
import { SigninpageComponent } from './pages/signinpage/signinpage.component';
import { SignuppageComponent } from './pages/signuppage/signuppage.component';
import { SingleComponent } from './pages/singlepage/singlepage.component';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { SnacksComponent } from './pages/snacks/snacks.component';
import { SnackspageComponent } from './pages/snackspage/snackspage.component';
import { LunchpageComponent } from './pages/lunchpage/lunchpage.component';
import { BiscuitspageComponent } from './pages/biscuitspage/biscuitspage.component';
import { PasterypageComponent } from './pages/pasterypage/pasterypage.component';
import { CondinentalpageComponent } from './pages/condinentalpage/condinentalpage.component';
import { IcecreamspageComponent } from './pages/icecreamspage/icecreamspage.component';
import { ReviewComponent } from './pages/review/review.component';
 

const routes: Routes = [
  {
    path:'',component:HomepageComponent
  },
  {
    path:'home',component:HomepageComponent
  },
  {
    path:'about',component:AboutpageComponent
  },
  {
    path:'contact',component:ContactpageComponent
  },
  {
    path:'home',component:HomepageComponent
  },
  {
    path:'menu',component:menupageComponent
  },
  {
    path:'signin',component:SigninpageComponent
  },
  {
    path:'signup',component:SignuppageComponent
  },
  {
    path:'single',component:SingleComponent
  },
  {
    path:'beverages',component:BeveragespageComponent
  },
  {
    path:'snacks',component:SnackspageComponent

  },
  { 
    path:'lunch',component:LunchpageComponent

  },
  {
  path:'biscuits',component:BiscuitspageComponent

  },
  {
    path:'paestrys',component:PasterypageComponent
  },
  {
    path:'condinentals',component:CondinentalpageComponent
  },
  {
   path:'icecreams',component:IcecreamspageComponent
  },
  {
    path:'review',component:ReviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
