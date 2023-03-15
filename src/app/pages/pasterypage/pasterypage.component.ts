import { Component } from '@angular/core';
import { HeroService} from 'src/app/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pasterypage',
  templateUrl: './pasterypage.component.html',
  styleUrls: ['./pasterypage.component.css']
})
export class PasterypageComponent {
  myData:any
  constructor(private router:Router,private hero:HeroService) {}
  ngOnInit(){
    this.myData = this.menu
    console.log(this.myData);
    
  }
  menu=this.hero.getpaestrys()
  gotohere(id:any)
  {
    localStorage.setItem('id',id);
    this.router.navigate(['/single'])
  }

}
