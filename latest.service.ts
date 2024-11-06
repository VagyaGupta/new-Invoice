import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LatestService {

  private apiUrl = 'http://localhost:3000/invoices'; 

  constructor(private http: HttpClient) {}

  
  addInvoice(invoice: any): Observable<any> {
    return this.http.post(this.apiUrl, invoice);
  }

  
}




