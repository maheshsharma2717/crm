import { NgFor, NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-customer',
  imports: [NgIf],
  templateUrl: './search-customer.component.html',
  styleUrl: './search-customer.component.css'
})
export class SearchCustomerComponent {
  showModal = false;
searchText: any;
color: any;

constructor(private router:Router){}

  openDialog() {
    this.showModal = true;
  }

  closeDialog() {
    this.showModal = false;
  }


  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter(item =>
      item.company.toLowerCase().includes(searchText) ||
      item.name.toLowerCase().includes(searchText) ||
      item.phone.toLowerCase().includes(searchText) ||
      item.usdot.toLowerCase().includes(searchText)
    );
  }
navigateDetails(){
this.router.navigate(['/customer-details']);
}
}
