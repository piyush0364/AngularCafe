import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderitemService {
  readonly apiUrl = 'https://cafe-mgm-a7h7a2bpbkekgxh4.eastasia-01.azurewebsites.net/api/OrderItems';

  constructor(private http : HttpClient) { }

  getOrderItems(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getOrderItemsbyNo(OrderId:any): Observable<any> {
    // return this.http.get<any>(this.apiUrl);
    return this.http.get(`${this.apiUrl}/orderdetail/${OrderId}`);
  }
  
}
