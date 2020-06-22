import { Component, OnInit } from '@angular/core';
import { Shift } from 'src/app/shared/shifts/shift.model';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/shared/users/user.model';
import { UserService } from 'src/app/shared/users/user.service';
import { ShiftService } from 'src/app/shared/shifts/shift.service';

@Component({
  selector: 'app-create-shift',
  templateUrl: './create-shift.component.html',
  styleUrls: ['./create-shift.component.css']
})
export class CreateShiftComponent implements OnInit {

  constructor(public userService: UserService, private shiftService: ShiftService) { }

  newShift: Shift={
    ShiftId: null,
    Start: null,
    End: null
  }

  selectedUsers: User[];
  allUsers: User[];
  ngOnInit(): void {
    this.userService.getAll().toPromise()
    .then(res => {
      this.allUsers = res as User[];
      console.log(this.allUsers);
    });;
  }

  selectUser(us: User){
    this.selectedUsers= this.selectedUsers || [];
    this.selectedUsers.push(Object.assign({}, us));
    this.allUsers.splice(this.allUsers.indexOf(us), 1);
    console.log("added");
  }

  deselectUser(us: User){
    this.allUsers= this.allUsers || [];
    this.allUsers.push(Object.assign({}, us));
    this.selectedUsers.splice(this.selectedUsers.indexOf(us), 1);
    console.log("remove");
  }
  

  onSubmit(form:NgForm)
  {
    var shf = form.value as Shift;
    console.log(shf)
    this.shiftService.addShift(shf, this.selectedUsers);
  }
}
