import { Injectable } from '@angular/core';
import {Auth,signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut} from '@angular/fire/auth' 
import { Router } from '@angular/router';
import { Firestore,collection,addDoc } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor(private auth:Auth,private router:Router,private fire:Firestore) { }

  //signup method()
  signup(email:string,pass:string) {
    createUserWithEmailAndPassword(this.auth,email,pass).then(res=>{
     alert("Sign up sucessfully ")
     this.router.navigate(['/home'])
      
    }).catch(err=>{
      alert(err)
    });
    
  }
  //signin method()
  signin(email:string,pass:string) {
    signInWithEmailAndPassword(this.auth,email,pass).then(res=>{
      alert("Sign in sucessfully ")
      this.router.navigate(['/home'])

    }).catch(err=>{
      alert(err)
    })
  }
  //logout method
  logout(){
    signOut(this.auth).then(res=>{
      alert("log out sucessfully ")
      this.router.navigate(['/signin'])
       
     }).catch(err=>{
       alert(err)
     });
  }


  //contact-us method()
  feedback(data: any) {
    const feedbackCollection = collection(this.fire,'feedbackDetails')
    addDoc(feedbackCollection,data).then(res => {
      alert("feedback added successfully")
    }).catch(err => {
      alert(err)
    })
  }

  payment1(data:any){
    const paymentCollection = collection(this.fire,'paymentDetails');
    addDoc(paymentCollection,data).then(res => {
      alert("payment added successfully")
    }).catch(err => {
      alert(err)
    });

  }

  address(Adddetails:any){
    const addressCollection = collection(this.fire,'addressDetails');
    addDoc(addressCollection,Adddetails).then( () => {
      alert("address added successfully")
    })
    .catch(err => {
        alert(err)
      });

    }

}
