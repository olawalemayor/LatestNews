import { Component, Input, OnInit } from '@angular/core';
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

  @Input() drawer: any;

  ngOnInit(): void {}
}
