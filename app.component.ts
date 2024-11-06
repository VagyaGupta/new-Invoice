import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaxInvoiceComponent } from "./tax-invoice/tax-invoice.component";
import { InvoiceformComponent } from "./invoiceform/invoiceform.component";
import { NewComponent } from "./new/new.component";
import { LatestComponent } from "./latest/latest.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaxInvoiceComponent, InvoiceformComponent, NewComponent, LatestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Invoice';
}
