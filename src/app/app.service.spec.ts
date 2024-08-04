import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';
import { User } from './app.model';
import { of } from 'rxjs';
describe('AppService', () => {
  let service: AppService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
    beforeEach(() => {
      const spy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
      TestBed.configureTestingModule({
        providers: [
          AppService,
          { provide: HttpClient, useValue: spy }
        ]
      });
  
      service = TestBed.inject(AppService);
      httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    });
  
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  
    it('should fetch users as an Observable<User[]>', () => {
      const dummyUsers: User[] = [
        {
          id: 1,
          firstName: 'John',
          lastName: 'Doe',
          name: 'John Doe',
          email: 'john.doe@example.com',
          age: 28,
          gender: 'Male',
          address: {
            street: '123 Main St',
            city: 'New York',
            state: 'NY',
            zip: '10001'
          },
          phone: '555-1234',
          isActive: true,
          registered: '2023-01-15'
        },
        {
          id: 2,
          firstName: 'Jane',
          lastName: 'Smith',
          name: 'Jane Smith',
          email: 'jane.smith@example.com',
          age: 32,
          gender: 'Female',
          address: {
            street: '456 Oak St',
            city: 'Los Angeles',
            state: 'CA',
            zip: '90001'
          },
          phone: '555-5678',
          isActive: false,
          registered: '2022-11-10'
        }
      ];
  
      httpClientSpy.get.and.returnValue(of(dummyUsers));
  
      service.getUsers().subscribe((users) => {
        expect(users.length).toBe(2);
        expect(users).toEqual(dummyUsers);
      });
    });
  
    it('should fetch a single user by ID as an Observable<User>', () => {
      const dummyUser: User = {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        name: 'John Doe',
        email: 'john.doe@example.com',
        age: 28,
        gender: 'Male',
        address: {
          street: '123 Main St',
          city: 'New York',
          state: 'NY',
          zip: '10001'
        },
        phone: '555-1234',
        isActive: true,
        registered: '2023-01-15'
      };
  
      httpClientSpy.get.and.returnValue(of(dummyUser));
  
      service.getUserById(1).subscribe((user) => {
        expect(user).toEqual(dummyUser);
      });
    });
  
    it('should add a new user and return it', () => {
      const newUser: User = {
        id: 3,
        firstName: 'Alice',
        lastName: 'Wonderland',
        name: 'Alice Wonderland',
        email: 'alice.wonderland@example.com',
        age: 25,
        gender: 'Female',
        address: {
          street: '789 Elm St',
          city: 'Wonderland',
          state: 'WL',
          zip: '99999'
        },
        phone: '555-5678',
        isActive: true,
        registered: '2023-07-01'
      };
  
      httpClientSpy.post.and.returnValue(of(newUser));
  
      service.addUser(newUser).subscribe((user) => {
        expect(user).toEqual(newUser);
      });
    });
  
    it('should update an existing user and return the updated user', () => {
      const updatedUser: User = {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        name: 'John Doe',
        email: 'john.doe@example.com',
        age: 30,
        gender: 'Male',
        address: {
          street: '123 Main St',
          city: 'New York',
          state: 'NY',
          zip: '10001'
        },
        phone: '555-1234',
        isActive: true,
        registered: '2023-01-15'
      };
  
      httpClientSpy.put.and.returnValue(of(updatedUser));
  
      service.updateUser(1, updatedUser).subscribe((user) => {
        expect(user).toEqual(updatedUser);
      });
    });
  
    it('should delete an existing user', () => {
      httpClientSpy.delete.and.returnValue(of(undefined));
  
      service.deleteUser(1).subscribe((response) => {
        expect(response).toBeUndefined();
      });
    });
});

