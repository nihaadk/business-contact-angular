import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs';
<<<<<<< HEAD
import { Bussinesses} from './../model/Businesses';
=======
import { Bussinesses } from './../model/Businesses';
>>>>>>> 4cbe6f457dcb49b4fe4e1746d6ed296bac276382
import { Category } from './../model/Category';

@Injectable()
export class FirebaseService {

  businesses: FirebaseListObservable<any[]>;
  categories: FirebaseListObservable<any[]>;

  constructor(private _af: AngularFire) {
  }

<<<<<<< HEAD
  getBusinesses(){
    this.businesses = this._af.database.list('/businesses') as FirebaseListObservable<Bussinesses[]>;
    return this.businesses;
  }

  getCategories(){
=======
  getBusinesses(category:string = null) {
    if (category != null) {
      this.businesses = this._af.database.list('/businesses', {
        query: {
          orderByChild: 'category',
          equalTo: category
        }
      }) as FirebaseListObservable<Bussinesses[]>;

    } else {
      this.businesses = this._af.database.list('/businesses') as FirebaseListObservable<Bussinesses[]>;
    }
    
    return this.businesses;
  }

  getCategories() {
>>>>>>> 4cbe6f457dcb49b4fe4e1746d6ed296bac276382
    this.categories = this._af.database.list('/categories') as FirebaseListObservable<Category[]>;
    return this.categories;
  }

<<<<<<< HEAD
  
=======

>>>>>>> 4cbe6f457dcb49b4fe4e1746d6ed296bac276382

}
