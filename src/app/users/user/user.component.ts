import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/users/user.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/users/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  styles:[]
})
export class UserComponent implements OnInit {

  constructor(public service:UserService,
    public toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.populateForm();
  }


  resetForm(form?:NgForm)
  {
    if(form!=null)
    {
      form.resetForm();
      this.service.formData = {
        UserId: null,
        Username: null,
        Password: null,
        Email: null,
        Active: 0,
        Token: null
      }
    }
  }

  populateForm(){
    this.service.getUser().subscribe(
      (res: any) => {
        console.log(res);
        this.service.profile = Object.assign({}, res);
        this.service.profile.Password = null;
        console.log(this.service.profile);
      },
      err => {
        if(err.status == 400)
        {
          this.toastr.error('something went wrong', 'Authentication failed');
        }
        else
        {
          console.log(err)
        }
      }
    )
    
  }

  onSubmit(form:NgForm)
  {
    var test = form.value as User;
    test.UserId = this.service.profile.UserId;
    this.service.postUser(test).subscribe(
      res => {
        this.resetForm(form)
        this.toastr.success('Submitted successfully', 'User Created')
        this.router.navigateByUrl('profile');
      },
      err => {
        console.log(err)
      }
    )
  }
}
