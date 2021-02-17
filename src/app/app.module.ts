import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Footer2Component } from './components/footer2/footer2.component';
import { News2Component } from './components/news2/news2.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';

import {RequestService} from './services/request.service';
import { HomesComponent } from './components/homes/homes.component';
import { NewsdataComponent } from './components/newsdata/newsdata.component';
import { MenuComponent } from './components/menu/menu.component'
@NgModule({
  // 这里放组件
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    Footer2Component,
    News2Component,
    LifecycleComponent,
    HomesComponent,
    NewsdataComponent,
    MenuComponent
  ],
  // 这里放模块
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
