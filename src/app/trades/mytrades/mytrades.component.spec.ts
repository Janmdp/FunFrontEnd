import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytradesComponent } from './mytrades.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { User } from 'src/app/shared/users/user.model';

describe('MytradesComponent', () => {
  let component: MytradesComponent;
  let fixture: ComponentFixture<MytradesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytradesComponent ],
      imports: [ HttpClientModule,  ToastrModule.forRoot(), AppRoutingModule ]
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
    fixture = TestBed.createComponent(MytradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
