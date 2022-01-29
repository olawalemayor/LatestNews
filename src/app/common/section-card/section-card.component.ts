import { Component, Input, OnInit } from '@angular/core';
import { NewsdataService } from '../../services/newsdata.service';
import { News } from '../../models/news';
import { CarouselConfig } from 'ng-carousel-cdk';

@Component({
  selector: 'app-section-card',
  templateUrl: './section-card.component.html',
  styleUrls: ['./section-card.component.css'],
})
export class SectionCardComponent implements OnInit {
  @Input() header: string = '';
  @Input() category: string = '';
  @Input() posts: number = 0;
  @Input() class: string = '';

  latestNews: News[] = [];

  config: CarouselConfig<News>;

  constructor(private newsdataService: NewsdataService) {}

  ngOnInit(): void {
    if (this.category.length > 0) {
      this.newsdataService
        .getNewsbyCategory(this.category)
        .subscribe((response) => {
          this.latestNews = response.results;
          this.config = {
            items: this.latestNews,
          };
        });
    } else {
      this.newsdataService.getLatestNews().subscribe((respose) => {
        this.latestNews = respose.results;
        this.config = {
          items: this.latestNews,
        };
      });
    }
  }
}
