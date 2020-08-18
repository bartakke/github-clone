import { Component, OnInit } from '@angular/core';
import { ApiInterface } from 'src/app/services/apiInterface.service';
import { HoldDataService } from 'src/app/services/holddata.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserListComponent implements OnInit {

  usersTemp = [];
  showLoader: boolean = false;
  workFlow: Subscription;
  temp = 'newstories.json';
  constructor(
    private _apiInterface: ApiInterface,
    private _holddataservice: HoldDataService,
  ) { }

  ngOnInit(): void {

    this.getUserData();
  }

//get user details from github api. As github provides limited api request per our so we stored data in service for future user.
  getUserData() {
    this.usersTemp = [];
    if (this._holddataservice.getUsers() && (this._holddataservice.getUsers()).length > 0) {
      this.usersTemp =  this._holddataservice.getUsers();
    } else {
      this._apiInterface.get('/users').subscribe((item) => {
        Object.values(item).forEach(feed => {
          this.usersTemp.push(feed);
        })
        this._holddataservice.setUsers(this.usersTemp);
      })
    }
  }


  ngOnDestroy(): void {
    if (this.workFlow) {
      this.workFlow.unsubscribe();
    }
  }
}
