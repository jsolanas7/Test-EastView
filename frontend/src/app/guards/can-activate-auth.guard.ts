import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../components/login/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateAuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router){}
  async canActivate(){
    try{
       var res = await this.loginService.isLoggedUser();
       if(!res){
        localStorage.removeItem("token");
        this.router.navigate(['login']);
        return false;
      }
      return true;
    }catch(err){
      this.router.navigate(['login']);
      return false;
    }
  }
}