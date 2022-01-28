import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  heroImage = '../../../assets/images/pexels-matheus-bertelli-2674271.jpg';

  constructor() {}

  ngOnInit(): void {}
}
