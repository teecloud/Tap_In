import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreProductsPage } from './explore-products.page';

describe('ExploreProductsPage', () => {
  let component: ExploreProductsPage;
  let fixture: ComponentFixture<ExploreProductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreProductsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExploreProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
