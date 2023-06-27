import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class NieuwsArtiekelsService {

  constructor(private httpClient: HttpClient) { }

  getTopHeadlines(): Observable<any> {
    return this.httpClient.get<any>(
      `https://newsapi.org/v2/top-headlines?country=US&apiKey=b5a6ce1a500b451fa26458782edab53b`
    );
  }

  getArticlesByCategorie(category: string): Observable<any> {
    return this.httpClient.get<any>(
      `https://newsapi.org/v2/top-headlines?country=US&category=${category}&apiKey=b5a6ce1a500b451fa26458782edab53b`
    );
  }
}