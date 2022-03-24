import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { first } from 'rxjs/operators';
import { Message } from 'src/app/_models/message';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { ChatService } from 'src/app/_services/chat.service';
import { ShopService } from 'src/app/_services/shop.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ChatComponent implements OnInit {

  messages = null;
  messageForm!: FormGroup;
  editMsgForm: FormGroup;
  users: User[];

  constructor(private chatService: ChatService,
    private fb: FormBuilder,
    public authService: AuthService,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private shopService: ShopService,
    private location: Location) {
    config.backdrop = 'static';
    config.keyboard = false;
  }


  ngOnInit(): void {
    this.getMessages();
    this.createMessageForm();
    this.editMsgForm = this.fb.group({
      message: ['', Validators.required]
    });
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
      pfpImg:this.authService.pfpImg,
      message: this.messageForm.value.message
    }
    if (this.messageForm.value.message) {
      this.chatService.addMessage(obj).subscribe(() => { this.getMessages(); });
      this.messageForm.reset();

    }
  }

  deleteChatMessage(id: number) {
    const message = this.messages.find(x => x.id === id);
    confirm('Are you sure you want to delete this message?') ?
      this.chatService.deleteChatMsg(id)
        .pipe(first())
        .subscribe(() => this.messages = this.messages.filter(x => x.id !== id)) : "";
  }

  open(content) {
    this.modalService.open(content);
  }

  get f() { return this.editMsgForm.controls; }

  updateMessage(id: number) {
    const message = this.messages.find(x => x.id === id);
    let obj: Message = {
      username: this.authService.username,
      pfpImg:this.authService.pfpImg,
      message: this.editMsgForm.value.message
    }
    this.chatService.updateMsg(id, obj)
      .pipe(first())
      .subscribe(() => this.getMessages())
  }
  goBack(): void {
    this.location.back();
  }

  getUsers() {
    this.shopService.getAllUsers().subscribe(data => {
      setTimeout(() => {
        this.users = data;
        console.log(this.users);
      }, 200);
    });
  }




}
