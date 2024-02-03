import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToRegister() {
      this.route.navigate(['/register']);
  }

  goToForgot() {
      this.route.navigate(['/forgot']);
  }

  goToTabs() {
      this.route.navigate(['/tabs']);
  }

}
