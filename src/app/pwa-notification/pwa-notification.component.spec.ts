import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwaNotificationComponent } from './pwa-notification.component';

describe('PwaNotificationComponent', () => {
  let component: PwaNotificationComponent;
  let fixture: ComponentFixture<PwaNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PwaNotificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PwaNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
