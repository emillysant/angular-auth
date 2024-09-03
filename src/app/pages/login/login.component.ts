import { Component } from '@angular/core';
import { LoginAPIClass } from '../../models/login';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: LoginAPIClass = {
    login: '',
    password: ''
  }
  constructor(private authService: AuthService, private routes: Router){}

  onLogin() {
    console.log(this.login)
    this.authService.login(this.login)
      .subscribe({
        next: (res: any) => {
          console.log("login", res)
          localStorage.setItem("token", res.token)
          this.routes.navigateByUrl('')
        },
        error: (error) => {
          console.error('Error:', error);
        }
      });
  }
}
