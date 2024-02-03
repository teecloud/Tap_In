import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss'],
})
export class SliderPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToWelcome() {
      this.route.navigate(['/welcome']);
  }

}
