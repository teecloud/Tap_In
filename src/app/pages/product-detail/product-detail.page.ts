import { ProductModalPage } from './../product-modal/product-modal.page';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

    colors = [
        '#F1F0F4',
        '#E5D2C4',
        '#deda97',
        '#b9ede0',
        '#DDE7F1',
        '#D6E6E0',
        '#BBBBBB',
        '#E6CBCA',
        '#e5d1eb'
    ];
    availableSizes = [
        'XS', 'S', 'M', 'L'
    ];
    currentColor;
    currentSize;

    constructor(private modalCrtl: ModalController, private navCtrl: NavController) { }

    ngOnInit() {
    }

    chooseColor(val) {
        this.currentColor = val;
    }

    chooseSize(val) {
        this.currentSize = val;
    }

    async openModal() {
        const modal = await this.modalCrtl.create({
          component: ProductModalPage,
          cssClass: 'center_modal'
        });
        return await modal.present();
    }

    goToBack() {
        this.navCtrl.back();
    }

}
