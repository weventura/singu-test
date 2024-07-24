import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerComponent } from './drawer.component';

describe('DrawerComponent', () => {
  let component: DrawerComponent;
  let fixture: ComponentFixture<DrawerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrawerComponent],
    });
    fixture = TestBed.createComponent(DrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event', () => {
    const eventSpy = spyOn(component.closed, 'emit');

    component.closeDrawer();

    expect(eventSpy).toHaveBeenCalledTimes(1);
  });
});
