import { Component, OnInit } from '@angular/core';
import { NewsdataService } from '../../services/newsdata.service';
import { ArchiveNews } from '../../models/news';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css'],
})
export class SideBarComponent implements OnInit {
  constructor(
    private newsDataService: NewsdataService,
    private router: Router
  ) {}

  featuredNews: ArchiveNews[] = [];
  ngOnInit(): void {
    this.newsDataService.getArchiveNews().subscribe((response) => {
      this.featuredNews = response.results;
    });
  }
}
