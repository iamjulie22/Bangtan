import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { LoginComponent } from './_components/login/login.component';
import { RegisterComponent } from './_components/register/register.component';
import { AccountComponent } from './_components/account/account.component';
import { AlbumDetailComponent } from './_components/album-detail/album-detail.component';
import { AlbumsComponent } from './_components/albums/albums.component';
import { ChatComponent } from './_components/chat/chat.component';
import { HomeComponent } from './_components/home/home.component';
import { MemberDetailComponent } from './_components/member-detail/member-detail.component';
import { MembersComponent } from './_components/members/members.component';
import { ShowsComponent } from './_components/shows/shows.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    MembersComponent,
    MemberDetailComponent,
    AlbumsComponent,
    AlbumDetailComponent,
    ShowsComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    NgbModule,
  ],
  providers: [AppComponent], 
  bootstrap: [AppComponent]
})
export class AppModule { }
