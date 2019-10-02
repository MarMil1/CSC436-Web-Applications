import { Injectable } from '@angular/core';
import { Message } from './models/message';
import { Messages } from './models/messages';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  message = new Message();
  messages = new Messages();
  user = new User();

  constructor() { 
    this.message.text = 'sample message';
    this.message.timestamp = new Date;
    this.messages.messagesArray.push(this.message);
    
  }

  addMsg(newMsg: Message) {
    this.messages.messagesArray.push(newMsg);
  }

  findArrayMessages() {
    return this.messages;

  }


}

