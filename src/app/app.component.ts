import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'login_auth';

  constructor(private routes: Router){}

  logout() {
    console.log("logout")
    localStorage.removeItem('token');
    this.routes.navigate(['/login']);
  }
}
