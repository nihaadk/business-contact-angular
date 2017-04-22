import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';


// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyB2w4EjEY812MpjSvz-055lzedZJIbQ5F8",
    authDomain: "ionic-travel.firebaseapp.com",
    databaseURL: "https://ionic-travel.firebaseio.com",
    storageBucket: "ionic-travel.appspot.com",
    messagingSenderId: "723372099256"
  };



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
