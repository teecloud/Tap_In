import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-verify',
  templateUrl: './mobile-verify.page.html',
  styleUrls: ['./mobile-verify.page.scss'],
})
export class MobileVerifyPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  onOtpChange(eve) {

  }

  goToTabs() {
      this.route.navigate(['/tabs']);
  }

}
