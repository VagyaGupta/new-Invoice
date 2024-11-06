import { Routes } from '@angular/router';
import { TaxInvoiceComponent } from './tax-invoice/tax-invoice.component';
import { InvoiceformComponent } from './invoiceform/invoiceform.component';

export const routes: Routes = [
    {
        path:'app-tax-invoice',
        component:TaxInvoiceComponent
    },
    {
        path:'',
        component:InvoiceformComponent
    },


];
