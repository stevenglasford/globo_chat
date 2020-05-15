import { Component } from '@angular/core';
//angularfire is used as the primary angular fire member
//authproviders and authmethods for authentication
//firebaselistobservables allow for fetching of chat messages
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject, AngularFireList, AngularFireDatabaseModule } from "angularfire2/database"; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatApp';
  items: AngularFireList<any>;
  name: any;
  msgVal: string = '';
}
