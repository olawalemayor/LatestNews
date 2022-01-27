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
  tagline = 'Stay updated with latest news...';
  ngOnInit(): void {}
}
