import { Component } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { HeroService } from 'src/app/hero.service';


@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class menupageComponent {
  
  myData:any
  constructor(private router:Router,private hero:HeroService) {}
  ngOnInit(){
    this.myData = this.menu
    console.log(this.myData);
    
  }
  menu=this.hero.giveData()
  gotohere(id:any)
  {
    localStorage.setItem('id',id);
    this.router.navigate(['/single'])
  }
}
