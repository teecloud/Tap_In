import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MobileVerifyPageRoutingModule } from './mobile-verify-routing.module';
import { MobileVerifyPage } from './mobile-verify.page';
import { NgOtpInputModule } from 'ng-otp-input';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MobileVerifyPageRoutingModule,
    NgOtpInputModule
  ],
  declarations: [MobileVerifyPage]
})
export class MobileVerifyPageModule {}
