import { Component, OnInit } from '@angular/core';
import { NewsdataService } from './services/newsdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'LatestNews';

  menu: string[] = []; //side navigation menu

  constructor(private newsService: NewsdataService) {}

  ngOnInit(): void {
    this.menu = this.newsService.menu;
  }
}
