import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoldDataService {

  usersTemp = [];
  constructor() { }

  //  get data from localStorage
  getUsers() {
    const myData = JSON.parse(localStorage.getItem('usersTemp'));
    return this.usersTemp = myData;
  }

  // set data to localStorage
  setUsers(value) {
    localStorage.setItem('usersTemp', JSON.stringify(value));
    this.usersTemp = value;
  }

  //filter user by id
  getUser(id: number) {
    return this.getUsers().find(user => user.id === id);
  }
}
