import { NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {

    collections = [
        {
            img : 'assets/imgs/5.jpg',
            name: 'Designer Collection',
            off : 'Up to 70% off'
        },
        {
            img : 'assets/imgs/6.jpg',
            name: 'Women\'s Suit',
            off : 'Up to 40% off'
        },
        {
            img : 'assets/imgs/7.jpg',
            name: 'Winter Collection',
            off : 'Up to 45% off'
        },
        {
            img : 'assets/imgs/8.jpg',
            name: 'Summer Collection',
            off : 'Up to 60% off'
        },

    ];
    constructor(private router: Router) { }

    ngOnInit() {
    }

    goToCart() {
        this.router.navigate(['/cart']);
    }

    goToExploreProducts(val) {
        const navData: NavigationExtras = {
            queryParams: {
                value: val
            }
        };
        this.router.navigate(['/explore-products'], navData);
    }

}
