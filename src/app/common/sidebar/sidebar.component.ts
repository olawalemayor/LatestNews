import { Component, OnInit } from '@angular/core';
import { NewsdataService } from '../../services/newsdata.service';
import { ArchiveNews } from '../../models/news';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css'],
})
export class SideBarComponent implements OnInit {
  constructor(private newsDataService: NewsdataService) {}
  featuredNews: ArchiveNews[] = [];
  ngOnInit(): void {
    this.newsDataService.getArchiveNews().subscribe((response) => {
      this.featuredNews = response.results;
    });
  }
}
