import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {
  
  code!:string
  verify:any
  Error : string = ""

  constructor(private _Router:Router , private _AuthService:AuthService ) { 
 
  }

  ngOnInit(): void {
    this.verify = JSON.parse(localStorage.getItem("varificationID") || "{}")
  }
  onOtpChange(data:any)
  {
    this.code = data 
  }
  checkCode ( ){
    var credintials = firebase.auth.PhoneAuthProvider.credential( this.verify ,this.code)
    firebase.auth().signInWithCredential(credintials).then
     ((res)=>{
      localStorage.setItem("userData", JSON.stringify(res))
      this._AuthService.setPreDashBoardData()
      this._Router.navigate(['/dashboerd'])
    }).catch((err)=>{
      this.Error = err.message 
    })
  }
}
