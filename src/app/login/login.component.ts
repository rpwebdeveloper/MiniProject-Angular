import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { SharedService } from '../Services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private loginInfo: LoginService) { }

  ngOnInit(): void {
  }

  form: FormGroup = new FormGroup({
    username: new FormControl('',[Validators.required, Validators.email])
  });

  submit() {
    if (this.form.valid && this.form.value.username) {
      this.loginInfo.loginInfo.next(this.form.value.username);
      this.router.navigateByUrl('/dashboard');
      this.submitEM.emit(this.form.value);
    }
  }

  
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
}
