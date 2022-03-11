import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Message } from 'src/app/_models/message';
import { AuthService } from 'src/app/_services/auth.service';
import { ChatService } from 'src/app/_services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages=null;
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

  deleteChatMessage(id:number){
    const message = this.messages.find(x=> x.id ===id);
    confirm('Are you sure you want to delete this message?') ?
    this.chatService.deleteChatMsg(id)
    .pipe(first())
    .subscribe(()=>this.messages = this.messages.filter(x=>x.id !== id)) : "";
  }


}
