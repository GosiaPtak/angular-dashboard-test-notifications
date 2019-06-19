import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SignInService } from '../../shared/services/sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {
  login = false;
  errorMessage = '';
  user = {
    login: null,
    password: null
  };

  constructor(private router: Router, private signInService: SignInService) {}
  ngOnDestroy(): void {}
  private checkUser = () => {
    this.signInService.getUserFromRequest(this.user.login, this.user.password).then(response => {
      if (response === '200') {
        this.login = true;
        this.router.navigateByUrl('/dashboard');
      } else {
        this.errorMessage = 'Niepoprawny email lub hasło';
      }
    });
  }
  async handleSubmit() {
      this.checkUser();
  }
  ngOnInit() {}
}
