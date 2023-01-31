import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiCreateComponent } from './pi-create.component';

describe('PiCreateComponent', () => {
  let component: PiCreateComponent;
  let fixture: ComponentFixture<PiCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
