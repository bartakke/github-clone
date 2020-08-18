import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiInterface } from './services/apiInterface.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  loginForm: FormGroup;
  constructor(
    private _formbuilder: FormBuilder,
    private _serverApi: ApiInterface
  ) {
    this.initializeForm();
  }

  initializeForm(): void {
    this.loginForm = this._formbuilder.group({
      userid: ['', Validators.required],
      userpassword: ['', Validators.required],
      rememberme: ['']
    });
  }
}
