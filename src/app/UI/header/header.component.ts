import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  brand: string = 'LatestNews';
  tagline = 'Stay updated with latest news...';

  @Input() drawer: any; //drawer directive from Material design in AppComponent

  ngOnInit(): void {}
}
