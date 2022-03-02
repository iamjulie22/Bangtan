import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Message from 'src/app/_models/message';
import { AuthService } from 'src/app/_services/auth.service';
import { ChatService } from 'src/app/_services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages: Message[] = [];
  messageForm!: FormGroup;

  constructor(private chatService: ChatService, private fb: FormBuilder, public authService: AuthService) { }


  ngOnInit(): void {
    this.getMessages();
    this.createMessageForm();
  }

  getMessages(): void {
    this.chatService.getAllMessages().subscribe(data => this.messages = data);
  }

  createMessageForm() {
    this.messageForm = this.fb.group({
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    let obj: Message = {
      username: this.authService.username,
      message: this.messageForm.value.message
    }

    this.chatService.addMessage(obj).subscribe(() => { this.getMessages(); });
    this.messageForm.reset();
  }



}
