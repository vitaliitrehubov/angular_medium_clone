import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { AuthService } from 'src/app/auth/services/auth.service';
import { environment } from 'src/environments/environment';

describe('auth service', () => {
  let authService: AuthService;
  let http: HttpClient;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthService
      ]
    });

    authService = TestBed.inject(AuthService);
    http = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpController.verify());

  it('auth service is created', () => {
    expect(authService).toBeDefined();
  });

  it('register method should work correctly', () => {
    const registerData = {
      user: {
        email: 'test@email.com',
        username: 'Vitalii',
        password: '1234@pass'
      }
    }

    authService.register(registerData).subscribe(({ username, email }) => {
      expect(username).toEqual(registerData.user.username);
      expect(email).toEqual(registerData.user.email);
    });

    const req = httpController.expectOne(environment.apiUrlRegister);

    expect(req.request.method).toBe('POST');
    req.flush(registerData);
  });

  it('login method should work correctly', () => {
    const loginData = {
      user: {
        email: 'test@email.com',
        password: '1234@pass'
      }
    }

    authService.login(loginData).subscribe(({ email }) => {
      expect(email).toEqual(loginData.user.email);
    });

    const req = httpController.expectOne(environment.apiUrlLogin);
    expect(req.request.method).toBe('POST');
    req.flush(loginData);
  });

  // it('updateUserInfo method should work properly', () => {
  //   const updateUserData = {
  //     user: {
  //       username: 'dummyusername',
  //       id: 123,
  //       bio: 'short bio',
  //       email: 'dummy@email.com',
  //       createdAt: 'sdf',
  //       updatedAt: 'sdf',
  //       image: 'sdf',
  //       token: 'token',
  //       password: '123'
  //     }
  //   }

  //   authService.updateUserInfo(updateUserData.user).subscribe(
  //     ({ email }) => {
  //       expect(email).toEqual(updateUserData.user.email)
  //     }
  //   )

  //   const req = httpController.expectOne(environment.apiUrlUser);
  //   expect(req.request.method).toBe('PUT');
  //   req.flush(updateUserData.user);
  // });
})
