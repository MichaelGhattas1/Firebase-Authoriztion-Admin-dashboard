import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

var config = {
  apiKey: "AIzaSyBfAaNw8esftgNlR-W3tTvMMM2rxnpiwqY",
    authDomain: "pentavalue-6da93.firebaseapp.com",
    projectId: "pentavalue-6da93",
    storageBucket: "pentavalue-6da93.appspot.com",
    messagingSenderId: "342760972550",
    appId: "1:342760972550:web:b7fe5d6fb14a2962077e87"
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  phone : any 
  phonePrefix:string='+2'
  reCaptchaVarifier : any 
  constructor( private _Router:Router , private _AuthService:AuthService) { 
   
  }

  ngOnInit(){
    firebase.initializeApp(config)
  }

  getCode(){
    this.reCaptchaVarifier=new firebase.auth.RecaptchaVerifier('signInBtn',{size:"invisible"})
    firebase.auth().signInWithPhoneNumber( this.phonePrefix+this.phone,this.reCaptchaVarifier).then((result)=>{
      localStorage.setItem("varificationID",JSON.stringify(result.verificationId))
      this._AuthService.setPreCodeData()
      this._Router.navigate(['/code'])
    })
  }
  
  

}
