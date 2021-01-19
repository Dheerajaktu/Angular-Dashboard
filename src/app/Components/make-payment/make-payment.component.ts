import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TitleService } from 'src/app/Services/title.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']
})
export class MakePaymentComponent implements OnInit {
  title: string = 'Make Payment';
  tabTitle: string = 'Make Payment';

  nameForm: FormGroup;
  cardForm: FormGroup;
  cvvForm: FormGroup



  constructor(private fb: FormBuilder, private componentTitleService: TitleService, private titleService: Title) { }

  ngOnInit() {
    this.nameForm = this.fb.group({
      name: ['', Validators.required],

    }),
      this.cardForm = this.fb.group({
        cardNumber: ['', Validators.required],
      }),
      this.cvvForm = this.fb.group({
        cvvNumber: ['', Validators.required]
      }),
      this.componentTitleService.title = this.title;
    this.titleService.setTitle(this.tabTitle);

  }

}
