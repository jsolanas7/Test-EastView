import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isWitch = false;
  constructor(
    private loginService: LoginService,
    private router: Router

  ) { }

  async ngOnInit() {
    this.isWitch = await this.loginService.validateWitchRole();
  }
  onClose(){
    localStorage.removeItem("token");
    this.router.navigate(['login']);
  }
}
