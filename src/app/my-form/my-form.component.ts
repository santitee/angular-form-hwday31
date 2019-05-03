import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  form: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      postalAddress: ['', [Validators.required, Validators.maxLength(500)]],
      comment: ''});
  }
 
  ngOnInit() {
  }
  submitForm() {
    alert(JSON.stringify(this.form.value));
  }
}
