import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { Bussinesses} from './model/Businesses';
import { Category } from './model/Category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})
export class AppComponent implements OnInit {
  
  businesses: Bussinesses[];
  categories: Category[];
  appState: string;
  activeKey: string;

  constructor(private _fs: FirebaseService){
  }

  ngOnInit(){
    this._fs.getBusinesses().subscribe(bussineses => {
      this.businesses = bussineses;
<<<<<<< HEAD
      console.log(bussineses);
=======
>>>>>>> 4cbe6f457dcb49b4fe4e1746d6ed296bac276382
    });

    this._fs.getCategories().subscribe(categories => {
      this.categories = categories;
<<<<<<< HEAD
      console.log(categories);
=======
>>>>>>> 4cbe6f457dcb49b4fe4e1746d6ed296bac276382
    });
  }

  changeState(state, key){
<<<<<<< HEAD
    console.log("Changing state to: "+ state);
    
    if(key){
      console.log("Changing key to: "+ key);
=======
    if(key){
>>>>>>> 4cbe6f457dcb49b4fe4e1746d6ed296bac276382
      this.activeKey = key;
    }

    if(state){
      this.appState = state;
    }
  }

  filterCategory(category){
<<<<<<< HEAD

=======
    console.log(category);
    this._fs.getBusinesses(category).subscribe(bussineses => {
      this.businesses = bussineses;
    });
>>>>>>> 4cbe6f457dcb49b4fe4e1746d6ed296bac276382
  }

}
