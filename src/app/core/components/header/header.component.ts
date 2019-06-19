import { Component, OnInit } from '@angular/core';
import { SignInService } from 'src/app/shared/services/sign-in.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private signInService: SignInService) {
  }
  public notifications: Array<object> = [
    { content: `this is a warning notification`, type: `warning` },
    { content: `this is an error notification`, type: `error` },
    { content: `this is an info notification`, type: `info` }
  ];
  public randomTime = 0;
  public interval: any;
  public toggleNotifications = false;
  public randomNotification: object = this.notifications[0];
  public timestamp = Date.now();
  public getRandomTime = () => {
    const min = Math.ceil(5000);
    const max = Math.floor(10000);
    return this.randomTime = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  public displayRandomNotification: any = () => {
      this.randomNotification = this.notifications[
        Math.floor(Math.random() * this.notifications.length)
      ];
  }
  public displayNotification = () => {
    console.log(this.toggleNotifications);
    if (this.toggleNotifications) {
      clearInterval(this.displayRandomNotification);
    } else {
      setInterval(this.displayRandomNotification, this.getRandomTime());
    }
  }
  public toggleNotification = () => {
      this.toggleNotifications = !this.toggleNotifications;
      console.log(this.toggleNotifications);
  }

  ngOnInit() {
    this.displayNotification();
  this.signInService.getStatus();
    }
  }

