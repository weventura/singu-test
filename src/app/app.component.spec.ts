import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MockComponent, MockModule } from 'ng-mocks';
import { HeaderComponent } from './shared/components/header/header.component';
import { RouterModule } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [AppComponent, MockComponent(HeaderComponent)],
      imports: [MockModule(RouterModule)],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
