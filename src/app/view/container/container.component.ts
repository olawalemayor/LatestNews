import { Component, OnInit } from '@angular/core';
import { NewsdataService } from '../../services/newsdata.service';
import { News } from '../../models/news';

@Component({
  selector: 'news-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  constructor(private newsService: NewsdataService) {}

  view(): News[] {
    let news = this.newsService.news;
    return news;
  }

  ngOnInit(): void {}
}
