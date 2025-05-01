import { NgFor, NgIf } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import Swal from 'sweetalert2';
import { ToasterService } from '../../services/shared/toaster.service';
@Component({
  selector: 'app-customer-details',
  imports: [NgIf,FormsModule,ReactiveFormsModule],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})

export class CustomerDetailsComponent  implements OnInit{
  cardExpiry: string = '';
  showModal = false;
cheque=false;
  bankForm: any;
  cardForm: any;
 
constructor(private fb:FormBuilder,private toast:ToasterService){}
ngOnInit() {
  this.bankForm = this.fb.group({
    accountHolderName: ['', Validators.required],
    zipcode: [''],
    bankName: ['', Validators.required],
    routingNo: ['', Validators.required],
    accountNo: ['', Validators.required],
  });

  this.cardForm = this.fb.group({
    fullName: ['', [Validators.required]],
    cardNumber: ['', [Validators.required, Validators.pattern(/^\d{4}-\d{4}-\d{4}-\d{4}$/)]],
    expiry: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
    cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]],
    zipCode: ['']
  });


}


closeDialog() {
  this.showModal=false;
  this.cheque=false;
}
openDialog() {
this.showModal=true;
}
Dialog() {
this.cheque=true;
}
submitted:boolean=false;
items:any;



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




onSubmit() {
  if (this.bankForm.valid) {
    console.log('Form Submitted', this.bankForm.value);
this.toast.success("cheque details saved succesfully");
 

  } else {
    this.bankForm.markAllAsTouched();

   this.toast.error('Failed to save cheque details');
  }
}

onSubmits() {
  if (this.cardForm.valid) {
    const cardData = this.cardForm.value;
    console.log('Saving card data:', cardData);
this.toast.success('Card details saved succesfully');
    

  } else {
    this.cardForm.markAllAsTouched();

    this.toast.error('Failed to  save Card details');
  }
}

  
closeDialogs(): void {
  
  console.log('Dialog closed');
}

}
