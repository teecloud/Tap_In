import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  availableSizes = [
    'XS', 'S', 'M', 'L', 'XL'
  ];
  currentSize;

  brands = [
      'Academy', 'ACNE', 'Ator', 'Baby', 'Bec Bride'
  ];


  constructor(private modalCrtl: ModalController) { }

  ngOnInit() {
  }

  chooseSize(val) {
      this.currentSize = val;
  }

  close() {
      this.modalCrtl.dismiss();
  }

  // async openFilterModel() {
  //   const modal = await this.modalCrtl.create({
  //     component: FilterPage,
  //     cssClass: 'custom_modal'
  //   });
  //   return await modal.present();
  // }

}
