import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-explore-products',
  templateUrl: './explore-products.page.html',
  styleUrls: ['./explore-products.page.scss'],
})
export class ExploreProductsPage implements OnInit {

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

    title;
  constructor(private navCtrl: NavController, private router: Router, private route: ActivatedRoute) {
      this.route.queryParams.subscribe(data => {
          this.title = data.value
      })
  }

    ngOnInit() {
    }

    goToBack() {
        this.navCtrl.back();
    }

    goToProduct() {
        this.router.navigate(['/product-detail']);
    }

    goToCart() {
      this.router.navigate(['/cart']);
    }

}
