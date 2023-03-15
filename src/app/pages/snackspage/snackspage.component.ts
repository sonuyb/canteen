import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-snackspage',
  templateUrl: './snackspage.component.html',
  styleUrls: ['./snackspage.component.css']
})
export class SnackspageComponent {
  myData:any
  constructor(private router:Router,private hero:HeroService) {}
  ngOnInit(){
    this.myData = this.menu
    console.log(this.myData);
    
  }
  menu=this.hero.getsnacks()
  gotohere(id:any)
  {
    localStorage.setItem('id',id);
    this.router.navigate(['/single'])
  }

}
