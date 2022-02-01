import { Component, OnInit } from '@angular/core';
import { NewsdataService } from './services/newsdata.service';
import { Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'LatestNews';

  getNews(title, drawer: MatDrawer) {
    this.router.navigate([`category/${title.toLowerCase()}`]);
    drawer.close();
  }

  menu: string[] = []; //side navigation menu

  constructor(private newsService: NewsdataService, private router: Router) {}

  ngOnInit(): void {
    this.menu = this.newsService.menu;
  }
}
