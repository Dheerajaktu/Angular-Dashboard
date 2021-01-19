import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ForgetPasswordComponent} from './forget-password/forget-password.component';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { TitleService } from 'src/app/Services/title.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  forgetPasswordForm: FormGroup;
  signupForm: FormGroup;
  title:string='Forms';
  tabTitle:string='Forms';

  constructor(public dialog: MatDialog, private fb: FormBuilder,private componentTitleService: TitleService,private titleService: Title) {
  }

  ngOnInit() {
    this.forgetPasswordForm = this.fb.group({
      id: ['', Validators.required],
      pass: ['', Validators.required]
      // id: new FormControl('', [Validators.required]),
      // pass: new FormControl('', [Validators.required])
    
    }),
      this.signupForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      });
      this.componentTitleService.title=this.title;
      this.titleService.setTitle(this.tabTitle);
  }

  onLogin() {
  }


  onSignup() {

  }


  forgetPassword() {
    this.dialog.open(ForgetPasswordComponent,
      {
        width: '550px',
        height: '200px'
      });
  }

}
