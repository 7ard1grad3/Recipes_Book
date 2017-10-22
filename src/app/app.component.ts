import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    firebase.initializeApp({
      apiKey: 'AIzaSyA6zl1Uu8luoOXLGWb7_19ScxU9--xIXWY',
      authDomain: 'ng-recipebook-79c34.firebaseapp.com',
    });
  }

}
