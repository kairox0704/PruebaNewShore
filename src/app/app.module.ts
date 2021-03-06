import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HouseComponent, } from './components/house/house.component';
import { HeaderComponent } from './components/header/header.component'
import { HttpClientModule } from '@angular/common/http';
import { APP_ROUTING } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HouseComponent,
    HeaderComponent,
  ],
  imports: [
    APP_ROUTING,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
