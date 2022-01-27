import { Component, OnInit } from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { NewsdataService } from '../../services/newsdata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private newsDataService: NewsdataService) {}

  brand: string = 'LatestNews';

  menu = [
    'Top',
    'World',
    'Sports',
    'Business',
    'Science',
    'Entertainment',
    'Food',
    'Politics',
    'Environment',
    'Technology',
  ];

  getNews(butonGroup: MatButtonToggleGroup) {
    const category: string = butonGroup.value;
    this.newsDataService.getNewsbyCategory(category.toLowerCase());
  }

  ngOnInit(): void {}
}
