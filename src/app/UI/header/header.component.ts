import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  brand: string = 'LatestNews';
  tagline = 'Stay updated with latest news...';

  goHome() {
    this.router.navigate(['']);
  }

  @Input() drawer: any; //drawer directive from Material design in AppComponent

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
