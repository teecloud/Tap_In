import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

    cart = ['assets/imgs/10.jpg', 'assets/imgs/11.jpg', 'assets/imgs/12.jpg'];
    qty = 1;
    constructor(private route: Router, private navCtrl: NavController) { }

    ngOnInit() {
    }

    goToCheckout() {
        this.route.navigate(['/checkout']);
    }

    minus() {
        if(this.qty > 1) {
            this.qty = this.qty - 1;
        }
    }

    plus() {
        this.qty = this.qty + 1;
    }

    goBack() {
        this.navCtrl.back();
    }

}
