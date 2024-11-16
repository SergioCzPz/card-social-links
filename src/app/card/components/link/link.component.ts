import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrl: './link.component.css',
  standalone: true,
})
export class LinkComponent {
  @Input({ required: true }) link!: string;
}
