// import { Component } from '@angular/core';
// import { FormArray, FormControl, FormGroup, FormsModule,  ReactiveFormsModule, Validators } from '@angular/forms';
// import { CommonModule} from '@angular/common';
// import { InvoiceService } from '../invoice.service';

// interface Item {
//   name: string;
//   hsn: number;
//   gst: number;
//   quantity: number;
//   rate: number;
//   amount:number;
//   total:number;
// }


// @Component({
//   selector: 'app-invoiceform',
//   standalone: true,
//   imports: [ReactiveFormsModule,CommonModule,FormsModule],
//   templateUrl: './invoiceform.component.html',
//   styleUrl: './invoiceform.component.scss'
// })
// export class InvoiceformComponent {
  
//   stateForm: string[] = [
//     'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
//     'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
//     'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
//     'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
//     'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
//     'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands',
//     'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep',
//     'Delhi', 'Puducherry'
//   ];

//   // items: Item[] = [
//   //   { name: '', hsn: 1234, gst: 1, quantity: 1, rate: 1,amount:234,total:223}
//   // ];


// invoiceForm:FormGroup=new FormGroup({
//   invoiceNumber:new FormControl("",[Validators.required,this.positive]),
//   invoiceDate:new FormControl("",[Validators.required]),
//   paymentDueDate:new FormControl("",[Validators.required]),
//   referenceNumber:new FormControl(),
//   referenceDate:new FormControl(),
//   deliveryDate:new FormControl(),
//   shipTo:new FormControl("",Validators.required),
//   invoiceAmount: new FormControl("",Validators.required),
//   sgst:new FormControl(),
//   cgst:new FormControl(),
//   igst:new FormControl(),
//   gst:new FormControl("",Validators.required),
//   rate:new FormControl("",Validators.required),
//   quantity: new FormControl("",Validators.required),
//   itemName:new FormControl("",Validators.required),
//   items: new FormArray([])

// })


// itemFormGroup:FormGroup = new FormGroup({
//   name: new FormControl( Validators.required),
//   hsn: new FormControl( Validators.required),
//   gst: new FormControl( Validators.required),
//   quantity: new FormControl( Validators.required),
//   rate: new FormControl( Validators.required),
//   amount: new FormControl( Validators.required),
//   total: new FormControl( Validators.required),
// });


// positive(control: FormControl): { [key: string]: boolean } | null {
//   if (control.value && control.value <= 0) {
//     return { positive: true };
//   }
//   return null; 
// }


// constructor(private invoiceService:InvoiceService) {}

//   getInvoices(): void {
//     this.invoiceService.getInvoices().subscribe((data) => {
//       this.invoiceForm = data;
//     });
//   }

//   addItem(item: Item): void {
   
  
//     (this.invoiceForm.get('items') as FormArray).push(itemFormGroup);
//   }
  
//   ngOnInit(): void {
//     this.items.forEach(item => this.addItem(item));
//   }
  


//   onSubmit(): void {
// console.log("hello")

//     // if (this.invoiceForm.valid) {  
      
//     //   const invoiceData = this.invoiceForm.value;
  
//     //   this.invoiceService.addInvoice(invoiceData).subscribe((data) => {
//     //     console.log('Invoice added successfully:', data);
//     //     // this.getInvoices();  
//     //     // this.invoiceForm.reset(); 
//     //   }, (error) => {
//     //     console.error('Error adding invoice:', error);
//     //   });
  
//     //   console.log(this.invoiceForm.value); 
//     // } else {
//     //   console.log('Form is invalid');
//     // }
//   }
  

// onUpdate():void{
//   console.log('Update clicked');
// }
// }



import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InvoiceService } from '../invoice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invoiceform',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './invoiceform.component.html',
  styleUrls: ['./invoiceform.component.scss']
})
export class InvoiceformComponent implements OnInit {

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

  constructor(private invoiceService: InvoiceService) {
    this.invoiceForm = new FormGroup({
      invoiceNumber: new FormControl('', [Validators.required, this.positive]),
      invoiceDate: new FormControl('', Validators.required),
      paymentDueDate: new FormControl('', Validators.required),
      referenceNumber: new FormControl(),
      referenceDate: new FormControl(),
      deliveryDate: new FormControl(),
      shipTo: new FormControl('', Validators.required),
      invoiceAmount: new FormControl('', Validators.required),
      gst: new FormControl('', Validators.required),
      sgst: new FormControl(),
      cgst: new FormControl(),
      igst: new FormControl(),
      items: new FormArray([]),
    });
  }

  ngOnInit(): void {
    // Initialize with one empty item
    this.addItem();
  }

  // Getter for items FormArray
  get items(): FormArray {
    return this.invoiceForm.get('items') as FormArray;
  }

  // Method to create an empty item FormGroup
  createItem(): FormGroup {
    return new FormGroup({
      name: new FormControl('', Validators.required),
      hsn: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      gst: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      quantity: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      rate: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      amount: new FormControl('', Validators.required),
      total: new FormControl('', Validators.required)
    });
  }

  // Method to add an item row to the FormArray
  addItem(): void {
    this.items.push(this.createItem());
  }

  // Submit method for form
  onSubmit(): void {
    if (this.invoiceForm.valid) {
      const invoiceData = this.invoiceForm.value;
      console.log('Invoice Data:', invoiceData);

      // Call the service to save the invoice
      this.invoiceService.addInvoice(invoiceData).subscribe(
        response => {
          console.log('Invoice added successfully', response);
          this.invoiceForm.reset(); // Reset form after successful submission
        },
        error => {
          console.error('Error adding invoice:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

  // Custom positive number validator
  positive(control: FormControl): { [key: string]: boolean } | null {
    if (control.value && control.value <= 0) {
      return { positive: true };
    }
    return null;
  }
}
