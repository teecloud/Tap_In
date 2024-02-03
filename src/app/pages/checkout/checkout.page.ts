import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { PaymentMethodPage } from '../payment-method/payment-method.page';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

    tabID = 1;
    slideCardOpts = {
        slidesPerView : 1.2
    };

    constructor(private modalCtrl: ModalController, private route: Router, private navCtrl: NavController) { }

    ngOnInit() {
    }

    async openPaymentModel() {
        const modal = await this.modalCtrl.create({
            component: PaymentMethodPage,
            cssClass: 'custom_modal'
        });

        modal.onDidDismiss().then((data) => {
            console.log('=========', data.data.tabID);
            this.tabID = data.data.tabID;
        });

        return await modal.present();
    }

    goToTabs() {
        this.route.navigate(['tabs']);
    }

    goBack() {
        this.navCtrl.back();
    }

}
