import { Component } from '@angular/core';
import { CommentsComponent } from './comments/comments.component';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommentsComponent],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
})
export class VideoComponent {}
