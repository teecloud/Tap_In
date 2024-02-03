import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

    constructor(private route: Router, private navCtrl: NavController) { }

    ngOnInit() {
    }

    goToMobileVerify() {
        this.route.navigate(['/mobile-verify']);
    }

    goToBack() {
        this.navCtrl.back();
    }

}
