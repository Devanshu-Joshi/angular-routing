import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministartorComponent } from './administartor.component';

describe('AdministartorComponent', () => {
  let component: AdministartorComponent;
  let fixture: ComponentFixture<AdministartorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministartorComponent]
    });
    fixture = TestBed.createComponent(AdministartorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
