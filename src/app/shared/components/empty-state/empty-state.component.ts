import { Component, Input } from '@angular/core';

@Component({
  selector: 'singu-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss'],
})
export class EmptyStateComponent {
  @Input() description!: string;
}
