import { Component, OnInit } from '@angular/core';
import { NewsdataService } from '../../services/newsdata.service';
import { News, ArchiveNews } from '../../models/news';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'blog.component.html',
  styleUrls: ['blog.component.css'],
})
export class BlogComponent implements OnInit {
  news: News[] | ArchiveNews[] = [];

  constructor(
    private newsDataService: NewsdataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.newsDataService.getNews().subscribe((response) => {
      this.news = response.results.filter(
        (m) => m.title === this.route.params['title']
      );
    });
  }
}
