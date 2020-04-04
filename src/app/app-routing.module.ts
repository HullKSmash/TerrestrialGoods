import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from 'src/app/about/about.component';
import { ContactComponent } from 'src/app/contact/contact.component';
import { BlogComponent } from 'src/app/blog/blog.component';
import { HairComponent } from 'src/app/hair/hair.component';
import { BodyComponent } from 'src/app/body/body.component';
import { DeodorantComponent } from 'src/app/deodorant/deodorant.component';
import { FaceComponent } from 'src/app/face/face.component';
import { ToothComponent } from 'src/app/tooth/tooth.component';
import { MakeupComponent } from 'src/app/makeup/makeup.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'hair', component: HairComponent},
  {path: 'body', component: BodyComponent},
  {path: 'deodorant', component: DeodorantComponent},
  {path: 'face', component: FaceComponent},
  {path: 'tooth', component: ToothComponent},
  {path: 'makeup', component: MakeupComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
