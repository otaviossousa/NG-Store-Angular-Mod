import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-menu-restrito',
  templateUrl: './menu-restrito.component.html',
  styleUrls: ['./menu-restrito.component.css']
})
export class MenuRestritoComponent {

  constructor( private _router: Router,private _loginService:LoginService){}  

  logout(){
    localStorage.clear();
    this._loginService.setMostraMenu(true);
    this._router.navigate(['/login']);
  }
}
