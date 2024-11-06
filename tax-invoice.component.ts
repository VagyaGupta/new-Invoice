import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-tax-invoice',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './tax-invoice.component.html',
  styleUrl: './tax-invoice.component.scss'
})
export class TaxInvoiceComponent {
companyObj:any={
"companyName":'',
"companyAddress":'',
"iec":'',
"udyamRegNo":'',
"gstin":'',
"email":'',
"contact":'',
"logo":"",
"companyPAN":''
}



invoice=[{
particulars:'Item1',
hsnsac:'1234',
quantity:'1',
rate:'100',
gst:'18',
amount:'118'
},
{
  particulars:'Item2',
  hsnsac:'2345',
  quantity:'2',
  rate:'100',
  gst:'35',
  amount:'270'
  }

]



}
