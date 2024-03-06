import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import Conversations from "../../data/conversations.json";
import Contacts from "../../data/contacts.json";
import { Contact } from '../../model/contact';
import { Conversation } from '../../model/conversation';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StatusComponent } from '../messenger/status/status.component';

@Component({
  selector: 'app-messenger',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, NgClass, FormsModule, StatusComponent],
  templateUrl: './messenger.component.html',
  styleUrl: './messenger.component.scss'
})
export class MessengerComponent {
  contacts: Contact[] = Contacts;
  conversations: Conversation[] = Conversations;
  selectedContactId = 1;
  selectedConversation = this.conversations.find(c => c.contact_id === 1);
  messageText = "";

  trackById(index: number, contact: any) {
    return contact.id;
  }

  selectConversationId(id: number): void {
    this.selectedContactId = id;
    this.selectedConversation = this.conversations.find(c => c.contact_id === id);
  }

  sendMessage(): void {
    this.selectedConversation?.messages.push({
      "id": this.selectedContactId,
      "text": this.messageText,
      "sender_id": null,
      "timestamp": "12:37 PM"
    });
    this.messageText = "";
  }
}
