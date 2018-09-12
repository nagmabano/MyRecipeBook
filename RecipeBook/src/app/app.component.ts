import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loadedFeature:string = 'recipe';

  
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAc_jDnp3O1aSAb8atCX2NLiwD_VoKoEzU",
      authDomain: "ng-recipe-book-9a4ab.firebaseapp.com",
    })
  }
}
