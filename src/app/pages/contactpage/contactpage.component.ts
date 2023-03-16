import { Component } from '@angular/core';
import { FireService } from 'src/app/fire.service';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.css']
})
export class ContactpageComponent {

  name:string=''
  email:string=''
  msg:string=''

  constructor(private fire:FireService){}

  contact(){
    let data={
      name:this.name,
      email:this.email,
      msg:this.msg
    }
    this.fire.feedback(data);
  }

}
