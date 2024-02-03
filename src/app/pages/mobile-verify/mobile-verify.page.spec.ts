import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MobileVerifyPage } from './mobile-verify.page';

describe('MobileVerifyPage', () => {
  let component: MobileVerifyPage;
  let fixture: ComponentFixture<MobileVerifyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileVerifyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MobileVerifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
