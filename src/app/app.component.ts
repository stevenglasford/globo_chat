import { Component } from '@angular/core';
//angularfire is used as the primary angular fire member
//authproviders and authmethods for authentication
//firebaselistobservables allow for fetching of chat messages
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject, AngularFireList, AngularFireDatabaseModule } from "angularfire2/database"; 
import {} from "angularfire2/auth"
import { Observable } from 'rxjs';
import { ChatMessage } from './chatMessage'
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatApp';
  items: AngularFireList<any>;
  username: any;
  msgValue: string = '';

  constructor(public afd: AngularFireDatabase, public afa: AngularFireAuth){
    //get the last 5 sent messages
    this.items = afd.list('/messages', ref => 
      ref.limitToLast(5)
    );
    //this may or may not be needed or may be wrong
    this.afa.user.subscribe(auth =>{
      if(auth){
        this.username = auth;
      }
    })
  }

  login():void{
    this.afa.auth.signInWithEmailAndPassword;
  }

  chatSend(theirMessage: string) {
    this.items.push({
      message: theirMessage,
      name: this.afa.auth.currentUser
    })
  }

}
