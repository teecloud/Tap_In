import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.page.html',
  styleUrls: ['./shop-detail.page.scss'],
})
export class ShopDetailPage implements OnInit {

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

  cats = [
    'Everything',
    'Jackets',
    'Blazers',
    'Dresses',
    'Jeans',
    'T-shirts',
    'Shirts'
  ];
  selectCat = 0;

  constructor(private navCtrl: NavController, private route: Router) { }

  ngOnInit() {
  }

  goToBack() {
      this.navCtrl.back();
  }

  selCat(val) {
      console.log(val);
      this.selectCat = val;
  }

  goToProduct() {
    this.route.navigate(['/product-detail']);
  }

}
