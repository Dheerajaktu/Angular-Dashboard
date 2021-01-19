import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPassword: FormGroup;


  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.forgetPassword = this.fb.group({
      registerdMail: ['', Validators.required]
    });
  }

  onRecoverPassword() {

  }

}
