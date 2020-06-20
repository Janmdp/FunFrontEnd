import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/users/user.model';
import { UserService } from 'src/app/shared/users/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private toastr: ToastrService, public userService: UserService) { }

  user:User = {
    UserId: null,
    Username: null,
    Password: null,
    Email: null,
    Active: 0,
    Token: null
  }
  
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

  onLogout(){
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('');
    this.toastr.success('Succesfully logged out', 'Logout');
  }

  onProfile(){
    this.router.navigateByUrl('profile');
  }

  
}
