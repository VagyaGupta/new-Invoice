import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { LatestService } from '../latest.service';

@Component({
  selector: 'app-latest',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './latest.component.html',
  styleUrl: './latest.component.scss'
})
export class LatestComponent {

  stateForm: string[] = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands',
    'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep',
    'Delhi', 'Puducherry'
  ];


  invoiceForm: FormGroup;

  constructor(private latest:LatestService) {
    this.invoiceForm = new FormGroup({
      invoiceNumber: new FormControl('', [Validators.required,this.positive,Validators.pattern('^[0-9]+$')]),
      invoiceDate: new FormControl('', [Validators.required]),
      paymentDueDate: new FormControl('', [Validators.required]),
      referenceNumber: new FormControl('',Validators.pattern('^[0-9\-]+$')),
      referenceDate: new FormControl(),
      deliveryDate: new FormControl(),
      shipTo: new FormControl(),
      invoiceAmount: new FormControl(),
      gst: new FormControl('', [Validators.required,this.positive]),
      sgst: new FormControl(),
      cgst: new FormControl(),
      igst: new FormControl(),
      rate:new FormControl('',[Validators.required,this.positive])
      
    });
  }

  positive(control: FormControl): { [key: string]: boolean } | null {
  if (control.value && control.value <= 0) {
    return { positive: true };
  }
  return null; 
}

  onSubmit(): void {
    if (this.invoiceForm.valid) {
      const invoiceData = this.invoiceForm.value;
      console.log('Submitting invoice:', invoiceData);

      this.latest.addInvoice(invoiceData).subscribe((res) => {
        console.log('Invoice saved successfully:', res);
      });
    } else {
      console.log("Form is invalid");
    }
  }}
  


