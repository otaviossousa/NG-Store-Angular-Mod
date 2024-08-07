
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    usuario!: string;
    senha!: string;

    constructor(private _loginService: LoginService, private _router: Router) { }

    fazerLogin() {
        this._loginService.login(this.usuario, this.senha);
        this._router.navigate(['/restrito/lista']);
        this._loginService.setMostraMenu(false);
    }
}
