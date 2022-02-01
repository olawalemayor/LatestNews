import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dataResponse, News, ArchiveNews } from '../models/news';
import { ApiDetails } from './api-details';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsdataService {
  categorizedNews: News[] = []; //Categorized news
  latestNews: News[] = []; //Latest new - unsorted
  featuredNews: ArchiveNews[] = [];
  menu = menu;
  selectedNews: News[] = [];

  //I've set the language parameter to english on the request URL so it is not dynamic

  //To get Latest News sorted by category
  getNewsbyCategory(newsCategory: string): Observable<dataResponse> {
    return this.http.get<dataResponse>(
      `${endPoint}news?apikey=${apiKey}&category=${newsCategory}&language=en`,

      {}
    );
  }

  //To get Latest News unsorted
  getLatestNews(): Observable<dataResponse> {
    return this.http.get<dataResponse>(
      `${endPoint}news?apikey=${apiKey}&language=en`,

      {}
    );
  }

  //get Archived News
  getArchiveNews(): Observable<dataResponse> {
    return this.http.get<dataResponse>(
      endPoint2,
      //Can not use archive unless the API subscription plan is upgraded
      // `${endPoint}archive?apikey=${apiKey}`,
      {}
    );
  }

  //get single news
  getNews(title: string) {
    return this.getLatestNews().pipe(
      tap((response) => {
        let result = response.results;
        this.selectedNews = [result.find((x) => x.title === title)];
      })
    );
  }

  constructor(private http: HttpClient) {}
}

//Kept the API credentials in another location
const { endPoint, apiKey, endPoint2 } = ApiDetails;

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
