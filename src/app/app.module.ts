import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { HairComponent } from './hair/hair.component';
import { BodyComponent } from './body/body.component';
import { DeodorantComponent } from './deodorant/deodorant.component';
import { FaceComponent } from './face/face.component';
import { MakeupComponent } from './makeup/makeup.component';
import { ToothComponent } from './tooth/tooth.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    HairComponent,
    BodyComponent,
    DeodorantComponent,
    FaceComponent,
    MakeupComponent,
    ToothComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
