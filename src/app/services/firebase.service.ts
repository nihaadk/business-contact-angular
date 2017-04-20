import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs';
import { Bussinesses } from './../model/Businesses';
import { Category } from './../model/Category';

@Injectable()
export class FirebaseService {

  businesses: FirebaseListObservable<any[]>;
  categories: FirebaseListObservable<any[]>;

  constructor(private _af: AngularFire) {
  }

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
    this.categories = this._af.database.list('/categories') as FirebaseListObservable<Category[]>;
    return this.categories;
  }



}
