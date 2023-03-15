import { Component } from '@angular/core';
import { HeroService} from 'src/app/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biscuitspage',
  templateUrl: './biscuitspage.component.html',
  styleUrls: ['./biscuitspage.component.css']
})
export class BiscuitspageComponent {
  myData:any
  constructor(private router:Router,private hero:HeroService) {}
  ngOnInit(){
    this.myData = this.menu
    console.log(this.myData);
    
  }
  menu=this.hero.getbiscuits()
  gotohere(id:any)
  {
    localStorage.setItem('id',id);
    this.router.navigate(['/single'])
  }

}
