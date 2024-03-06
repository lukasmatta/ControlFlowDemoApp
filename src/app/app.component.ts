import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import Conversations from "./data/conversations.json";
import Contacts from "./data/contacts.json";
import { Contact } from './model/contact';
import { Conversation } from './model/conversation';
import { NgFor } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  contacts: Contact[] = Contacts;
  conversations: Conversation[] = Conversations;

  trackById(index: number, contact: any) {
    return contact.id;
  }
}
