import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KofluencePage } from './kofluence.page';

describe('KofluencePage', () => {
  let component: KofluencePage;
  let fixture: ComponentFixture<KofluencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KofluencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KofluencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
