import { MainModalPage } from './../main-modal/main-modal.page';
import { NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  sliders = [
    'assets/imgs/10.jpg',
    'assets/imgs/11.jpg',
    'assets/imgs/14.jpg',
  ];
  product = [
    'assets/imgs/5.jpg',
    'assets/imgs/6.jpg',
    'assets/imgs/7.jpg',
    'assets/imgs/8.jpg',
    'assets/imgs/9.jpg',
    'assets/imgs/10.jpg',
    'assets/imgs/11.jpg',
    'assets/imgs/12.jpg',
  ];

  constructor(private router: Router, private modalCrtl: ModalController) { }

  ngOnInit() {
      this.openModal();
  }

  goToShopPage() {
      this.router.navigate(['/shop-detail']);
  }

  goToProductDetail() {
      this.router.navigate(['/product-detail']);
  }

  async openModal() {
    const modal = await this.modalCrtl.create({
      component: MainModalPage,
      cssClass: 'main_modal'
    });
    return await modal.present();
  }

  goExplorePro() {
      const navData: NavigationExtras = {
        queryParams: {
            value: 'Women Collection'
        }
      };
      this.router.navigate(['/explore-products'], navData);
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

}
