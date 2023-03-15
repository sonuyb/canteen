import { Component } from '@angular/core';
import { Router  } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-beveragespage',
  templateUrl: './beveragespage.component.html',
  styleUrls: ['./beveragespage.component.css']
})
export class BeveragespageComponent {
  myData:any
  constructor(private router:Router,private hero:HeroService) {}
  ngOnInit(){
    this.myData = this.menu
    console.log(this.myData);
    
  }
  menu=this.hero.getbev()
  gotohere(id:any)
  {
    localStorage.setItem('id',id);
    this.router.navigate(['/single'])
  }
}


