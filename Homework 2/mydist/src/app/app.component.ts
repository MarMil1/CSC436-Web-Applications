import { Component } from '@angular/core';
import { Messages } from './models/messages';
import { MessagesService } from './messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mydist';
  arrMessages = new Messages();

  constructor(messagesService: MessagesService) {
    this.arrMessages = messagesService.findArrayMessages();
    console.log(this.arrMessages.messagesArray.length);
    
  }

}


