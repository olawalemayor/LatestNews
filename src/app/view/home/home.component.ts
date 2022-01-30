import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news';
import { NewsdataService } from '../../services/newsdata.service';
import { ArchiveNews } from '../../models/news';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  heroImage = '../../../assets/images/pexels-matheus-bertelli-2674271.jpg';

  latestNews: News[] | ArchiveNews[] = [];

  constructor(private newsDataService: NewsdataService) {}

  ngOnInit(): void {
    this.newsDataService.getLatestNews().subscribe((response) => {
      this.latestNews = response.results;
    });
  }
}
