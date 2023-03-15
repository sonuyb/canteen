import { Component } from '@angular/core';
import { HeroService} from 'src/app/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-condinentalpage',
  templateUrl: './condinentalpage.component.html',
  styleUrls: ['./condinentalpage.component.css']
})
export class CondinentalpageComponent {
  myData:any
  constructor(private router:Router,private hero:HeroService) {}
  ngOnInit(){
    this.myData = this.menu
    console.log(this.myData);
    
  }
  menu=this.hero.getcondinentals()
  gotohere(id:any)
  {
    localStorage.setItem('id',id);
    this.router.navigate(['/single'])
  }

}
