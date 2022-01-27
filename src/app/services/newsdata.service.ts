import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dataResponse, News } from '../models/news';
import { ApiDetails } from './api-details';

@Injectable({
  providedIn: 'root',
})
export class NewsdataService {
  news: News[] = [];
  latestNews: News[] = [];
  menu = menu;
  getNewsbyCategory(newsCategory: string) {
    this.http
      .get<dataResponse>(
        `${endPoint}news?apikey=${apiKey}&category=${newsCategory}&language=en`,
        {}
      )
      .subscribe((response) => {
        this.news = response.results;
      });
  }

  getLatestNews() {
    this.http
      .get<dataResponse>(`${endPoint}news?apikey=${apiKey}&language=en`, {})
      .subscribe((response) => {
        this.latestNews = response.results;
      });
  }

  constructor(private http: HttpClient) {}
}

const { apiKey, endPoint } = ApiDetails;

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
