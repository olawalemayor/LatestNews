import { Component, OnInit } from '@angular/core';
import { NewsdataService } from '../../services/newsdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  heroImage = '../../../assets/images/pexels-matheus-bertelli-2674271.jpg';

  //get Latest news - Uncategorized
  getLatestNews = () => {
    this.newsDataService.getLatestNews();
    return this.newsDataService.latestNews;
  };

  //get Latest News - Categorized
  getCatNews(Category: string) {
    this.newsDataService.getNewsbyCategory(Category);
    return this.newsDataService.news;
  }

  constructor(private newsDataService: NewsdataService) {}

  ngOnInit(): void {}
}
