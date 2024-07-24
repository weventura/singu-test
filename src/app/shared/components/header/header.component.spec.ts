import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { Router } from '@angular/router';
import { RouterMock } from '../../mocks/classes/router.mock';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [{ provide: Router, useClass: RouterMock }],
    });

    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should called onActiveTab method in OnInit', () => {
    const onActiveTabSpy = spyOn(component, 'onActiveTab');

    component.ngOnInit();

    expect(onActiveTabSpy).toHaveBeenCalledTimes(1);
  });

  it('should enable my orders tab in menu', () => {
    const menu = { label: 'Meus pedidos', route: 'orders', selected: false };

    component.onSelectMenu(menu);

    expect(menu.selected).toBeTruthy();
  });
});
