import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin = "cachavacha";
  password = "test";
  constructor(
    private toastr: ToastrService,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }


  onLogin(){
    if(this.userLogin && this.password){
      this.validateLogin();
    }else{
      this.toastr.error('Debe completar el usuario y la contraseña', 'Error' );
    }
  }

  async validateLogin(){
    try{
      var res = await this.loginService.validateLogin(this.userLogin, this.password)
        if(res != null){
          await this.loginService.setToken(res.token);
          this.router.navigate(['']);
        }else{
            this.toastr.error('Usuario o contraseña incorrectos', 'Error' );
        }
    }catch(err){
      this.toastr.error('Hubo un error al procesar la solicitud', 'Error' );
    }
  }

}
