import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  PreCodeData  = new BehaviorSubject("");
  PreDashBoard = new BehaviorSubject("") ;

  setPreCodeData()
  {
    let userData = JSON.stringify(localStorage.getItem("varificationID"))
    this.PreCodeData.next(userData)
  }
setPreDashBoardData()
{
  let userData = JSON.stringify(localStorage.getItem("userData"))
  this.PreDashBoard.next(userData)
}

logOut ()
{
  this.PreCodeData.next("")
  this.PreDashBoard.next("")
}
  constructor() {
    if( this.PreDashBoard.getValue() !="")
    {
      this.setPreDashBoardData()
    }
    if ( this.PreCodeData.getValue( ) !="")
    {
      this.setPreCodeData
    }
  }
}
