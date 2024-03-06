import { Component } from '@angular/core';

import Comments from "../../../data/comments.json";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [NgFor],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {
  comments = Comments;
}
