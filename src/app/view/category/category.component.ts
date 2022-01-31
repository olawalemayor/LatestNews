import { Component, OnInit } from '@angular/core';
import { NewsdataService } from '../../services/newsdata.service';
import { News, ArchiveNews } from '../../models/news';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor(
    private newsDataService: NewsdataService,
    private route: ActivatedRoute
  ) {}

  categorizedNews: News[] | ArchiveNews[] = [];

  ngOnInit(): void {
    const category = this.route.params['title'];
    this.newsDataService.getNewsbyCategory(category).subscribe((response) => {
      this.categorizedNews = response.results;
    });
  }
}
