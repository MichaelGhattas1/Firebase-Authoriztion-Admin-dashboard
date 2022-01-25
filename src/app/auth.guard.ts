import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  check:boolean = false ;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> 
    |boolean | UrlTree {

      this._AuthService.PreCodeData.subscribe(()=>{
        if(this._AuthService.PreCodeData.getValue() != "")
        {
          this.check= true;
        }
        else
        {
          this._Router.navigate(['/login'])
          this.check=false ;
        }
      })
      
    return this.check ;
      
  }
  
  constructor(private _AuthService:AuthService , private _Router:Router){

  }
}
