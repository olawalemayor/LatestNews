import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dataResponse, News, ArchiveNews } from '../models/news';
import { ApiDetails } from './api-details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsdataService {
  news: News[] = []; //Categorized news
  latestNews: News[] = []; //Latest new - unsorted
  featuredNews: ArchiveNews[] = [];
  menu = menu;

  //I've set the language parameter to english on the request URL so it is not dynamic

  //To get Latest News sorted by category
  getNewsbyCategory(newsCategory: string): Observable<dataResponse> {
    return this.http.get<dataResponse>(
      //`${endPoint}news?apikey=${apiKey}&category=${newsCategory}&language=en`,
      endPoint,
      {}
    );
  }

  //To get Latest News unsorted
  getLatestNews(): Observable<dataResponse> {
    return this.http.get<dataResponse>(
      //`${endPoint}news?apikey=${apiKey}&language=en`,
      endPoint,
      {}
    );
  }

  getArchiveNews(): Observable<dataResponse> {
    return this.http.get<dataResponse>(endPoint2, {});
  }

  getNews(): Observable<dataResponse> {
    return this.http.get<dataResponse>(endPoint, {});
  }

  constructor(private http: HttpClient) {}
}

//Kept the API credentials in another location
const { apiKey, endPoint, endPoint2 } = ApiDetails;

//Interface for the Category menu
const menu = [
  'Top',
  'World',
  'Sports',
  'Business',
  'Science',
  'Entertainment',
  'Food',
  'Politics',
  'Environment',
  'Technology',
];
