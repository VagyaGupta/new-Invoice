import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private apiUrl = 'http://localhost:3000/invoices';
  
  constructor(private http:HttpClient ){}

  getInvoices(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  
  addInvoice(invoice: any): Observable<any> {
    return this.http.post(this.apiUrl, invoice);
  }
}
