import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HoldDataService } from 'src/app/services/holddata.service';
import { switchMap } from 'rxjs/operators';
import { ApiInterface } from 'src/app/services/apiInterface.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  selectedUser;
  id: number;
  followersList = [];
  showLoader:boolean = false;
  private sub: any;
  constructor(
    private route: ActivatedRoute,
    private _holddataservice: HoldDataService,
    private _apiInterface: ApiInterface,
  ) { }

  // Get id from route and search service data and all the api to get followers
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.selectedUser = this._holddataservice.getUser(this.id)
      this.getAllFollowers(this.selectedUser)
    });
  }

  // Get selected followers api
  getAllFollowers(selectedUser) {
    this.showLoader = true;
    this._apiInterface.get('/users/'+ selectedUser.login +'/followers').subscribe((item) => {
      Object.values(item).forEach(feed => {
        this.followersList.push(feed)
      })
    })
    this.showLoader = false;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
