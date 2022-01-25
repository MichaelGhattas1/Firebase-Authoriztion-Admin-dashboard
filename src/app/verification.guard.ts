import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class VerificationGuard implements CanActivate {
  check:boolean = false ;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | 
    UrlTree> | boolean | UrlTree {
   
   this._AuthService.PreDashBoard.subscribe(()=>{
    if (this._AuthService.PreDashBoard.getValue() != "")
    {
    this.check=true
    }
    else
    {
      this.check = false 
      this._Router.navigate(['/login'])
    }
   })
  return this.check ;
  }
  constructor(private _Router:Router , private _AuthService:AuthService)
  {  
  }
}
