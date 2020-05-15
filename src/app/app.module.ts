import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import {AngularFireModule} from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyAFzq54hdDqrrzgYelrW4UsK9xwyXB0RAI",
  authDomain: "studentdata-5330a.firebaseapp.com",
  databaseURL: "https://studentdata-5330a.firebaseio.com",
  projectId: "studentdata-5330a",
  storageBucket: "studentdata-5330a.appspot.com",
  messagingSenderId: "16213049281",
  appId: "1:16213049281:web:c0b22ff4620a507b68b940"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
