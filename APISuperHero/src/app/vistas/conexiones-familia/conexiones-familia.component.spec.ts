import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConexionesFamiliaComponent } from './conexiones-familia.component';

describe('ConexionesFamiliaComponent', () => {
  let component: ConexionesFamiliaComponent;
  let fixture: ComponentFixture<ConexionesFamiliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConexionesFamiliaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConexionesFamiliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
