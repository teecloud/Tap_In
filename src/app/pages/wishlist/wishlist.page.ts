import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {

  tabID = 'all';

  items = [
      {
          img : 'assets/imgs/5.jpg',
          name : ''
      },
      {
          img : 'assets/imgs/6.jpg',
          name : ''
      },
      {
        img : 'assets/imgs/7.jpg',
        name : ''
      },
      {
          img : 'assets/imgs/8.jpg',
          name : ''
      },
      {
          img : 'assets/imgs/9.jpg',
          name : ''
      },
      {
          img : 'assets/imgs/10.jpg',
          name : ''
      },
  ];
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  segmentChanged(eve) {
      this.tabID = eve.detail.value;
      console.log(eve.detail.value);
  }

  goToBack() {
        this.navCtrl.back();
  }

}
