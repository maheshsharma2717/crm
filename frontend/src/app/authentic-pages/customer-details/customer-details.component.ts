import { NgFor, NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
@Component({
  selector: 'app-customer-details',
  imports: [NgIf,FormsModule],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent {
  cardExpiry: string = '';
  showModal = false;
closeDialog() {
  this.showModal=false;
}
openDialog() {
this.showModal=true;
}


onCardExpiryChange(value: string): void {
 
  let cleaned = value.replace(/\D/g, '');

  if (cleaned.length > 4) {
    cleaned = cleaned.slice(0, 4);
  }

  if (cleaned.length >= 3) {
    this.cardExpiry = cleaned.slice(0, 2) + '/' + cleaned.slice(2);
  } else {
    this.cardExpiry = cleaned;
  }
}

}
