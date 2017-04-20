import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { Bussinesses } from './model/Businesses';
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

  constructor(private _fs: FirebaseService) {
  }

  ngOnInit() {
    this._fs.getBusinesses().subscribe(bussineses => {
      this.businesses = bussineses;
    });

    this._fs.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  changeState(state, key) {

    if (key) {
      this.activeKey = key;
    }

    if (state) {
      this.appState = state;
    }
  }

  filterCategory(category) {
    this._fs.getBusinesses(category).subscribe(bussineses => {
      this.businesses = bussineses;
    });
  }

  addBusiness(company: string, category: string, years_in_business: string, description: string, phone: string, email: string, street_address: string, city: string, state: string, zipcode: string){
    console.log(company+" "+years_in_business+" "+description+" "+phone+" "+email+" "+street_address+" "+city+" "+state+" "+zipcode);
  }

}
