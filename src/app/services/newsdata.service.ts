import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dataResponse, News } from '../models/news';

@Injectable({
  providedIn: 'root',
})
export class NewsdataService {
  apiKey: string = 'pub_4026fb2695f366740ce602fa9b33b038a876';
  endPoint: string = 'https://newsdata.io/api/1/';
  news: News[] = [];
  menu = menu;
  getNewsbyCategory(newsCategory: string) {
    this.http
      .get<dataResponse>(
        `${this.endPoint}news?apikey=${this.apiKey}&category=${newsCategory}&language=en`,
        {}
      )
      .subscribe((response) => {
        this.news = response.results;
      });
  }

  constructor(private http: HttpClient) {}
}

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
