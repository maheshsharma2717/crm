import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ToasterService } from '../../services/shared/toaster.service';
import { CustomerService } from '../../services/customer.service';
@Component({
  selector: 'app-search-customer',
  standalone:true,
  imports: [NgIf,FormsModule,NgFor,ReactiveFormsModule],
  templateUrl: './search-customer.component.html',
  styleUrl: './search-customer.component.css'
})
export class SearchCustomerComponent implements OnInit {
  showModal = false;
  searchText: string = '';
color: any;
  customerForm: any;

constructor(private router:Router,private fb:FormBuilder,private toast:ToasterService ,private customerService:CustomerService ){}



ngOnInit(): void {
  this.filteredItems();
  this.customerForm = this.fb.group({
    usdot: [''],
    company: ['', Validators.required],
    name: ['', Validators.required],
    contact: ['', Validators.required]
  });
  this.getAllCustomerList();
}

  openDialog() {
    this.showModal = true;
  }

  closeDialog() {
    this.showModal = false;
  }


  transform(items: any[], searchText: string): any[] {
    if (!items) return [items];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter(item =>
      item.company.toLowerCase().includes(searchText) ||
      item.name.toLowerCase().includes(searchText) ||
      item.phone.toLowerCase().includes(searchText) ||
      item.usdot.toLowerCase().includes(searchText)
    );
  }




companies = [
  {
    company: 'XYZ Transport LLC',
    contact: 'Sarah Johnson',
    phone: '(555) 987-6543',
    usdot: '87654321',
  },
  {
    company: 'ABC Logistics',
    contact: 'John Doe',
    phone: '(555) 123-4567',
    usdot: '12345678',
  },

];

filteredItems() {
  const search = this.searchText.toLowerCase();
  return this.companies.filter(
    (item) =>
      item.company.toLowerCase().includes(search) ||
      item.contact.toLowerCase().includes(search) ||
      item.phone.includes(search) ||
      item.usdot.includes(search)
  );
}

navigateDetails(item: any) {

  this.router.navigate(['/customer-details']);
  console.log('Navigate to:', item);
}

onSubmit() {
  if (this.customerForm.valid) {
    console.log('Customer Data:', this.customerForm.value);

this.toast.success("new customer created");
    

   

  } else {
    this.customerForm.markAllAsTouched();

   this.toast.error("error creating new customer")

  }
}

getAllCustomerList(){
  this.customerService.getAllCustomer().subscribe({
    next:(res:any)=>{
      this.companies=res.items;
    }
  })
}
}
