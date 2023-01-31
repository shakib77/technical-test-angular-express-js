import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiListPageComponent } from './pi-list-page.component';

describe('PiListPageComponent', () => {
  let component: PiListPageComponent;
  let fixture: ComponentFixture<PiListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
