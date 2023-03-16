import { Component } from '@angular/core';
import { FireService } from 'src/app/fire.service';
@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent {

  fname:any=''
  lname:any=''
  email:any=''
  pass:any=''
  cpass:any=''

  constructor(private fs:FireService) {
  }
  //signup method
  register() {


    this.validation()
    this.fs.signup(this.email,this.pass)
    this.fname=''
    this.lname=''
    this.email=''
    this.pass=''
    this.cpass=''
    
  }

  validation()
  {
    if(this.fname==='')
    {
      alert('Please enter firstname')
    }
    else if(this.lname==='')
    {
      alert('Please enter lastname')
    }
    else if(this.pass==='')
    {
      alert('Please enter password')
    }
    else if(this.cpass==='')
    {
      alert('Please enter confirm password')
    }
    
  }
  
}


