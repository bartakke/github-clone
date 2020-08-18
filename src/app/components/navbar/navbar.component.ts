import { Component, OnInit } from '@angular/core';
import { HoldDataService } from 'src/app/services/holddata.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _holddataservice: HoldDataService,
  ) { }

  ngOnInit(): void {
  }


}
