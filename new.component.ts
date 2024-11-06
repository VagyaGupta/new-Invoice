import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule,  ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule} from '@angular/common';



interface Item {
  name: string;
  hsn: number;
  gst: number;
  quantity: number;
  rate: number;
  amount:number;
  total:number;
}

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.scss'
})














export class NewComponent {
  
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

  items: Item[] = [
    { name: '', hsn: 18, gst: 1, quantity: 1, rate: 1,amount:234,total:223}
  ];


invoiceForm:FormGroup=new FormGroup({
  invoiceNumber:new FormControl("",[Validators.required]),
  invoiceDate:new FormControl("",[Validators.required]),
  paymentDueDate:new FormControl("",[Validators.required]),
  referenceNumber:new FormControl(),
  referenceDate:new FormControl(),
  deliveryDate:new FormControl(),
  shipTo:new FormControl(),
  invoiceAmount: new FormControl(""),
  sgst:new FormControl(),
  cgst:new FormControl(),
  igst:new FormControl(),
  gst:new FormControl(),
  rate:new FormControl(),
  quantity: new FormControl(),
  itemName:new FormControl()

})


constructor(){}


onSubmit(): void {
  console.log(this.invoiceForm.value);

  }

onUpdate():void{
  console.log('Update clicked');
}

}

