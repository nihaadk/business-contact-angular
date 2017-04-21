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

  activeCompany: string;
  activeCategory: string;
  activeYears_in_business: string;
  activeDescription: string;
  activePhone: string;
  activeEmail: string;
  activeStreet_address: string;
  activeCity: string;
  activeState: string;
  activeZipcode: string;

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

  addBusiness(company: string, category: string, years_in_business: string, description: string, phone: string, email: string, street_address: string, city: string, state: string, zipcode: string) {

    var created_at = new Date().toString();
    var newBusiness = {
      company: company,
      category: category,
      years_in_business: years_in_business,
      description: description,
      phone: phone,
      email: email,
      street_address: street_address,
      city: city,
      state: state,
      zipcode: zipcode,
      created_at: created_at
    }

    this._fs.addBusiness(newBusiness);
    this.changeState('default', 0);
  }

  showEdit(business) {
    this.changeState('edit', business.$key);
    this.activeCompany = business.company;
    this.activeCategory = business.category;
    this.activeYears_in_business = business.years_in_business;
    this.activeDescription = business.description;
    this.activePhone = business.phone;
    this.activeEmail = business.email;
    this.activeStreet_address = business.street_address;
    this.activeCity = business.city;
    this.activeState = business.state;
    this.activeZipcode = business.zipcode;
  }

  updateBusiness() {
    var updated_at = new Date().toString();
    var updBusiness = {
      company: this.activeCompany,
      category: this.activeCategory,
      years_in_business: this.activeYears_in_business,
      description: this.activeDescription,
      phone: this.activePhone,
      email: this.activeEmail,
      street_address: this.activeStreet_address,
      city: this.activeCity,
      state: this.activeState,
      zipcode: this.activeZipcode,
      created_at: updated_at
    }

    this._fs.updateBusiness(this.activeKey, updBusiness);
    console.log(updBusiness);
    //this.changeState('default', 0);
  }

  remove(business) {
    this._fs.removeBusiness(business);
  }


}
