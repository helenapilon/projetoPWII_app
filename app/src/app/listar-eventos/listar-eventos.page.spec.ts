import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarEventosPage } from './listar-eventos.page';

describe('ListarEventosPage', () => {
  let component: ListarEventosPage;
  let fixture: ComponentFixture<ListarEventosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarEventosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarEventosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
