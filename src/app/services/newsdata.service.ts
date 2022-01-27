import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dataResponse, News } from '../models/news';
import { ApiDetails } from './api-details';

@Injectable({
  providedIn: 'root',
})
export class NewsdataService {
  news: News[] = []; //Categorized news
  latestNews: News[] = []; //Latest new - unsorted
  menu = menu;

  //I've set the language parameter to english on the request URL so it is not dynamic

  //To get Latest News sorted by category
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

  //To get Latest News unsorted
  getLatestNews() {
    this.http
      .get<dataResponse>(`${endPoint}news?apikey=${apiKey}&language=en`, {})
      .subscribe((response) => {
        this.latestNews = response.results;
      });
  }

  constructor(private http: HttpClient) {}
}

//Kept the API credentials in another location
const { apiKey, endPoint } = ApiDetails;

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
