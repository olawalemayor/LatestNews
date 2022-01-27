import { Component, OnInit } from '@angular/core';
import { NewsdataService } from '../../services/newsdata.service';
import { News } from '../../models/news';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  heroImage = '../../../assets/images/pexels-matheus-bertelli-2674271.jpg';

  getLatestNews = () => {
    this.nds.getLatestNews();
    return this.nds.latestNews;
  };

  getCatNews(Category: string) {
    this.nds.getNewsbyCategory(Category);
    return this.nds.news;
  }

  constructor(private nds: NewsdataService) {}

  ngOnInit(): void {}
}
