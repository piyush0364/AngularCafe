import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private readonly apiUrl='https://cafe-mgm-a7h7a2bpbkekgxh4.eastasia-01.azurewebsites.net/api/Contacts'
  constructor(private http: HttpClient) { }
  getFeedback(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Delete a feedback entry by ID (Admin part)
  deleteFeedback(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Submit new feedback (User part)
  sendFeedback(feedback: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, feedback);
  }
//   getFeedback(): Observable<any[]> {
//     return this.http.get<any[]>(this.apiUrl);
//   }

//   // Delete a feedback entry by ID
//   deleteFeedback(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}/${id}`);
// }
}


