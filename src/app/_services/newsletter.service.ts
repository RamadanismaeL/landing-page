import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsLetterResponse } from '../_interfaces/news-letter-response';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  private endpointUrl = 'http://localhost:5267/';

  constructor(private http: HttpClient) { }

  sendData(name: string, email: string) : Observable<NewsLetterResponse>
  {
    const data = {name, email};
    return this.http.post<NewsLetterResponse>(this.endpointUrl, data);
  }
}
