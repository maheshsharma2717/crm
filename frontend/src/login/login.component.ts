import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from '../app/services/shared/toaster.service';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,FormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm: any;
  showPassword = false;
  constructor( private router:Router,private fb:FormBuilder,private toast:ToasterService){}
 

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
ngOnInit(): void {
  this.loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
}

login() {
  if (this.loginForm.valid) {
    this.router.navigate(['/search-customers'])
    console.log('Login Data:', this.loginForm.value);
this.toast.success("login succesfull");
 
  } else {
    this.loginForm.markAllAsTouched();
  this.toast.error("login failed!")
  }
}
}
