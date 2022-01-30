import { Component, OnInit } from '@angular/core';
import { NewsdataService } from './services/newsdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'LatestNews';

  getNews(title) {
    console.log('clicked');
    this.router.navigate([`category/${title.toLowerCase()}`]);
  }

  menu: string[] = []; //side navigation menu

  constructor(private newsService: NewsdataService, private router: Router) {}

  ngOnInit(): void {
    this.menu = this.newsService.menu;
  }
}
