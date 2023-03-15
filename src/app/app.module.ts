import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroService } from 'src/app/hero.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';

import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { SingleComponent } from './pages/singlepage/singlepage.component';
import { menupageComponent } from './pages/menupage/menupage.component';
import { SigninpageComponent } from './pages/signinpage/signinpage.component';
import { SignuppageComponent } from './pages/signuppage/signuppage.component';
import { CondinentalpageComponent } from './pages/condinentalpage/condinentalpage.component';
import { LunchpageComponent } from './pages/lunchpage/lunchpage.component';
import { BiscuitspageComponent } from './pages/biscuitspage/biscuitspage.component';
import { BeveragespageComponent } from './pages/beveragespage/beveragespage.component';
import { PasterypageComponent } from './pages/pasterypage/pasterypage.component';
import { SinglebeveragespageComponent } from './pages/singlebeveragespage/singlebeveragespage.component';
import { SinglebiscuitspageComponent } from './pages/singlebiscuitspage/singlebiscuitspage.component';
import { SinglecondinentalpageComponent } from './pages/singlecondinentalpage/singlecondinentalpage.component';
import { SinglepasterypageComponent } from './pages/singlepasterypage/singlepasterypage.component';
import { SnacksComponent } from './pages/snacks/snacks.component';
import { IcecreamspageComponent } from './pages/icecreamspage/icecreamspage.component';
import { SnackspageComponent } from './pages/snackspage/snackspage.component';
import { SinglesnackpageComponent } from './pages/singlesnackpage/singlesnackpage.component';
import { SingleicecreamspageComponent } from './pages/singleicecreamspage/singleicecreamspage.component';
import { ReviewComponent } from './pages/review/review.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    FooterComponent,
    ContactpageComponent,
    menupageComponent,
    AboutpageComponent,
     SingleComponent,

     SigninpageComponent,
     SignuppageComponent,
     CondinentalpageComponent,
     LunchpageComponent,
     BiscuitspageComponent,
     BeveragespageComponent,
     PasterypageComponent,
     SinglebeveragespageComponent,
     SinglebiscuitspageComponent,
     SinglecondinentalpageComponent,
     SinglepasterypageComponent,
     SnacksComponent,
     IcecreamspageComponent,
     SnackspageComponent,
     SinglesnackpageComponent,
     SingleicecreamspageComponent,
     ReviewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
