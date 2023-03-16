import { Component } from '@angular/core';
import { FireService } from 'src/app/fire.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  fname: any = '';
  lname: any = '';
  email: any = '';
  phone: any = '';
  addr: any = '';
  option: any = '';
  constructor(private fs: FireService) {}
  payment(){
    this.validation()
    const data = {
      fname1:this.fname,
      lname1:this.lname,
      email1:this.email,
      phone1:this.phone,
      addr1:this.addr,
      option1:this.option
    };
    this.fs.payment1(data);
    this.fname = '';
    this.lname = '';
    this.email = '';
    this.phone = '';
    this.addr = '';
    this.option = '';
  }
  validation(){
    if(this.fname === ''){
      this.fname = 'Please enter your first name';
    }
    else if(this.lname === ''){
      this.lname = 'Please enter your last name';
    }
    else if(this.email==''){
      this.email = 'Please enter your email';
    }
    else if(this.phone==''){
      this.phone = 'Please enter your phone number';
    }
    else if(this.addr==''){
      this.addr = 'Please enter your address';
    }
    else if(this.option==''){
      this.option = 'Please select an option';
    }
  }
}
