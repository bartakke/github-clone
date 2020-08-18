import { Component, OnInit, Input } from '@angular/core';
import { ApiInterface } from 'src/app/services/apiInterface.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() user;
  userRepoTemp = []

  constructor(
    private _apiInterface: ApiInterface,
    private router: Router
  ) {

  }

  // navigate to user details component
  gotoUserDetails() {
    this.router.navigate(['user-details', this.user.id]);
  }

  ngOnInit(): void {
  }

}


