import { Component, OnInit } from '@angular/core';
import { User } from '../shared/users/user.model';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.css']
})
export class ShiftsComponent implements OnInit {

  constructor() { }

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

}
