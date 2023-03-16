import { Component } from '@angular/core';
import { FireService } from 'src/app/fire.service';
@Component({
  selector: 'app-signinpage',
  templateUrl: './signinpage.component.html',
  styleUrls: ['./signinpage.component.css']
})
export class SigninpageComponent {
    email:string=''
    pass:string=''
    constructor(private fs:FireService){ } 
    submit() {
      this.fs.signin(this.email, this.pass);
      this.email=''
      this.pass=''

    }
    }


