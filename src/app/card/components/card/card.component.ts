import { Component } from '@angular/core';
import { LinkComponent } from '../link/link.component';
import { ProfileInterface } from '../../types/profile.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  imports: [LinkComponent],
  standalone: true,
})
export class CardComponent {
  profile: ProfileInterface = {
    name: 'Jessica Randall',
    location: 'London, United Kingdom',
    bio: 'Front-end developer and avid reader.',
    links: ['GitHub', 'Frontend Mentor', 'LinkedIn', 'Twitter', 'Instagram'],
  };
}
