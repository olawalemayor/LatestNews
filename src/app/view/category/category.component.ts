import { Component, OnInit } from '@angular/core';
import { NewsdataService } from '../../services/newsdata.service';
import { News, ArchiveNews } from '../../models/news';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor(
    private newsDataService: NewsdataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  categorizedNews: News[] = [];
  category: string = this.route.snapshot.params['title'];

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.newsDataService
      .getNewsbyCategory(this.category)
      .subscribe((response) => {
        this.categorizedNews = response.results;
      });
  }
}
