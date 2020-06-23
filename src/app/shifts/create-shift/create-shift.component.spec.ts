import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShiftComponent } from './create-shift.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { User } from 'src/app/shared/users/user.model';


describe('CreateShiftComponent', () => {
  let component: CreateShiftComponent;
  let fixture: ComponentFixture<CreateShiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateShiftComponent ],
      imports: [ HttpClientModule,  ToastrModule.forRoot(), AppRoutingModule, FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    var profile:User = {
      UserId: 1,
      Username: 'Dixie Normus',
      Password: 'test123',
      Email: 'test@test.nl',
      Active: 2,
      Token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJEaXhpZSBOb3JtdXMiLCJlbWFpbCI6InRlc3RAdGVzdC5ubCIsImp0aSI6IjMwM2MxMDZmLThmZTAtNGVkNi1iZTMwLThhMzJjYmVkODYxMyIsImV4cCI6MTY2NDYxNzE1MCwiaXNzIjoiSmFuRWlja21hbnMiLCJhdWQiOiJKYW5FaWNrbWFucyJ9.XNQqImbL8vLMe4t-vBTFjOChDHpkiqFbB9EjKOQZOf8",
    }
    localStorage.setItem('currentUser', JSON.stringify(profile));
    fixture = TestBed.createComponent(CreateShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
