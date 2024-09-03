import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  user: User = {
    id: 0,
    email: "",
    password: "",
    name: "",
    role: "",
    avatar: ""
  };
  
  constructor( private authService: AuthService) {}
  ngOnInit(): void {
    
    // this.authService.getCurrentUser().subscribe({
    //   next: (res) => {
    //     console.log(res)
    //   }
    // });
  }


}
