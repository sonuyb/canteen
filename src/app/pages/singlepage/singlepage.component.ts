import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.css']
})
export class SingleComponent {
  single:any
  singleDataArray:any
  constructor(private hero: HeroService){}
  ngOnInit():void{
    let id=localStorage.getItem('id')
    this.singleDataArray=this.hero.getData()
    console.log(this.singleDataArray);
    this.single=this.singleDataArray.filter(e=>e.id===id)
    console.log(this.single)
    
  }
}
 
