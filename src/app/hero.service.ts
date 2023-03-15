import { Injectable } from '@angular/core';
import { data,beverages,snacks,paestrys,icecreams,biscuits,condinentals,lunch } from 'src/assets/data';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
    getData() {
        throw new Error('Method not implemented.');
    }

  constructor() { }
   giveData(){
   return data
   }

   getbev(){
    return beverages
  }
  getsnacks(){
    return snacks
  }
  getpaestrys(){
    return paestrys
  }
  geticecreams(){
    return icecreams
  }
  getbiscuits(){
    return biscuits
  }
  getcondinentals(){
    return condinentals
  }
  getlunch(){
    return lunch
  }
}
