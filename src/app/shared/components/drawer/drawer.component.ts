import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'singu-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent {
  @Output() closed = new EventEmitter();

  @Input() opened = false;
  @Input() title!: string;

  closeDrawer(): void {
    this.closed.emit();
  }
}
