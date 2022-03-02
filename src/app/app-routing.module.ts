import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './_components/account/account.component';
import { AlbumDetailComponent } from './_components/album-detail/album-detail.component';
import { AlbumsComponent } from './_components/albums/albums.component';
import { ChatComponent } from './_components/chat/chat.component';
import { HomeComponent } from './_components/home/home.component';
import { LoginComponent } from './_components/login/login.component';
import { MemberDetailComponent } from './_components/member-detail/member-detail.component';
import { MembersComponent } from './_components/members/members.component';
import { RegisterComponent } from './_components/register/register.component';
import { ShowsComponent } from './_components/shows/shows.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
  { path: 'members', component: MembersComponent },
  { path: 'detail/:id', component: MemberDetailComponent },
  { path: 'album-detail/:id', component: AlbumDetailComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'shows', component: ShowsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
