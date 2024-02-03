import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateModel } from 'src/app/shared/api-service';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  authenticateModel: AuthenticateModel = { userNameOrEmailAddress: 'admin', password: '123qwe', rememberClient: true };
  submitted = false;
  constructor(private route: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  goToRegister() {
      this.route.navigate(['/register']);
  }

  goToForgot() {
      this.route.navigate(['/forgot']);
  }

  onLogin(form: NgForm) {
    this.submitted = true;
    
    if (form.valid) {
      this.authService.authenticate(this.authenticateModel).subscribe((model) => {
        if(model){
          console.log("model response", model)
          this.route.navigateByUrl('/tabs');
        }
      });
    }
  }
}
