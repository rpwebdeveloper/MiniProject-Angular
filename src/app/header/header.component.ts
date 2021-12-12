import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from '../services/login.service';
import { SharedService } from '../Services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  loggerLabel = '';
  usrIn = '';
  private yourSubscription!: Subscription; 


  constructor(private router: Router, private loginInfo: LoginService) {}

  ngOnInit(): void {
    this.yourSubscription = this.loginInfo.loginInfo.subscribe(data=>{
      this.usrIn = data;
      this.loggerLabel = 'logout';
    });
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  gotodash() {
    this.loggerLabel = ''
    this.router.navigateByUrl('/login');
  }

  ngOnDestroy(): void {
    this.yourSubscription.unsubscribe();
  }
}
