import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  private apiUrl = 'http://localhost:5267/api/client/create';

  constructor(private http: HttpClient) { }

  sendData(name: string, email: string) : Observable<any>
  {
    const data = {name, email};
    return this.http.post<any>(this.apiUrl, data);
  }
}
