import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelPoderComponent } from './nivel-poder.component';

describe('NivelPoderComponent', () => {
  let component: NivelPoderComponent;
  let fixture: ComponentFixture<NivelPoderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelPoderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelPoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
