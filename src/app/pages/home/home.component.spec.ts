import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { User } from 'src/app/shared/users/user.model';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  var profile:User;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ HttpClientModule,  ToastrModule.forRoot(), AppRoutingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    profile = {
      UserId: 1,
      Username: 'Dixie Normus',
      Password: 'test123',
      Email: 'test@test.nl',
      Active: 2,
      Token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJEaXhpZSBOb3JtdXMiLCJlbWFpbCI6InRlc3RAdGVzdC5ubCIsImp0aSI6IjMwM2MxMDZmLThmZTAtNGVkNi1iZTMwLThhMzJjYmVkODYxMyIsImV4cCI6MTY2NDYxNzE1MCwiaXNzIjoiSmFuRWlja21hbnMiLCJhdWQiOiJKYW5FaWNrbWFucyJ9.XNQqImbL8vLMe4t-vBTFjOChDHpkiqFbB9EjKOQZOf8",
    }
    localStorage.setItem('currentUser', JSON.stringify(profile));
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show welcome message', () => {
    expect(component).toBeTruthy();
    expect(fixture.debugElement.query(By.css('h1')).nativeElement.innerText).toContain(profile.Username);
  });
});
