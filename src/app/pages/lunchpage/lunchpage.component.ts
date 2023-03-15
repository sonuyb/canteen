import { Component } from '@angular/core';
import { HeroService} from 'src/app/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lunchpage',
  templateUrl: './lunchpage.component.html',
  styleUrls: ['./lunchpage.component.css']
})
export class LunchpageComponent {
  myData:any
  constructor(private router:Router,private hero:HeroService) {}
  ngOnInit(){
    this.myData = this.menu
    console.log(this.myData);
    
  }
  menu=this.hero.getlunch()
  gotohere(id:any)
  {
    localStorage.setItem('id',id);
    this.router.navigate(['/single'])
  }

}
