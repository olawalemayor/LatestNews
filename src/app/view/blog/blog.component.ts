import { Component, OnInit } from '@angular/core';
import { NewsdataService } from '../../services/newsdata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from '../../models/news';

@Component({
  templateUrl: 'blog.component.html',
  styleUrls: ['blog.component.css'],
})
export class BlogComponent implements OnInit {
  news: News[] = [];

  pageTitle: string = this.route.snapshot.params['title'];

  constructor(
    private newsDataService: NewsdataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.newsDataService.getNews(this.pageTitle).subscribe((response) => {
      this.news = this.newsDataService.selectedNews;
    });
  }
}
