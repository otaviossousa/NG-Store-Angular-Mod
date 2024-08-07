import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestritoComponent } from './restrito.component';

describe('RestritoComponent', () => {
  let component: RestritoComponent;
  let fixture: ComponentFixture<RestritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestritoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
