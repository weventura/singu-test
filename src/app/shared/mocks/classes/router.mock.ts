import { NavigationEnd, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';

export class RouterMock {
  navigate = jasmine.createSpy('navigate');
  start = new NavigationStart(0, '/home');
  end = new NavigationEnd(1, '/home', '/orders');
  events = new Observable((observer) => {
    observer.next(this.start);
    observer.next(this.end);
    observer.complete();
  });
}
