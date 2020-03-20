import { Component, OnInit, Injectable } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
@Injectable()
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  _replytoCtrl: FormControl;
  messageCtrl: FormControl;
  mailUrl: string;
  submitted: Boolean;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient) {

    this.createForm();
    this.mailUrl = 'https://formspree.io/xoqlwkry';
   
  }

  ngOnInit() {
    this._replytoCtrl;
    this.messageCtrl;
    this.submitted = false;
    console.log("Submitted status: " + this.submitted);
  }

  createForm() {
    this.contactForm = this.fb.group({
      _replytoCtrl: ['', [Validators.required, Validators.email]],
      messageCtrl: ['', Validators.required],
      subscribe: false
    });
  }

  onSubmit(checkoutFormValues) {
    console.log(checkoutFormValues);
    let res = this.postMessage(checkoutFormValues);
    console.log(res);
    this.submitted = true;
    this.contactForm.reset();
    console.log('Form submitted');
    console.log(this.submitted);
    //display success message
  }

  postMessage(body) {
    let response;
    this.http.post<any>(this.mailUrl, body).subscribe(res => {
      response = res;
    })
    return response;
  }
  
  private log(message: string) {
    console.log(message);
  }

}
