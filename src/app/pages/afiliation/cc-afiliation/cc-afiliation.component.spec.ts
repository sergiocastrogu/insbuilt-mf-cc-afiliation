import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCAfiliationComponent } from './cc-afiliation.component';

describe('CCAfiliationComponent', () => {
  let component: CCAfiliationComponent;
  let fixture: ComponentFixture<CCAfiliationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CCAfiliationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CCAfiliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
