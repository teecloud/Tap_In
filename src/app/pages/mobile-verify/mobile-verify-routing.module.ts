import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobileVerifyPage } from './mobile-verify.page';

const routes: Routes = [
  {
    path: '',
    component: MobileVerifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobileVerifyPageRoutingModule {}
