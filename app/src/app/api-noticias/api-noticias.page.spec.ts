import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApiNoticiasPage } from './api-noticias.page';

describe('ApiNoticiasPage', () => {
  let component: ApiNoticiasPage;
  let fixture: ComponentFixture<ApiNoticiasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiNoticiasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApiNoticiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
