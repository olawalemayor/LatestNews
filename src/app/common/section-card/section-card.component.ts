import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NewsdataService } from '../../services/newsdata.service';
import { News, ArchiveNews } from '../../models/news';
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

  latestNews: News[] | ArchiveNews[] = [];

  config: CarouselConfig<News | ArchiveNews>;

  constructor(private newsdataService: NewsdataService) {}

  ngOnInit(): void {
    if (this.category.length > 0) {
      if (this.category === 'featured') {
        this.newsdataService.getArchiveNews().subscribe((response) => {
          this.latestNews = response.results;
          this.config = {
            items: this.latestNews,
          };
        });
      } else {
        this.newsdataService
          .getNewsbyCategory(this.category)
          .subscribe((response) => {
            this.latestNews = response.results;
            this.config = {
              items: this.latestNews,
            };
          });
      }
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
