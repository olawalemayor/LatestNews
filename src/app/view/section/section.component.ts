import { Component, Input, OnInit } from '@angular/core';
import { News } from '../../models/news';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent implements OnInit {
  constructor() {}

  @Input() sectionTitle: any;

  @Input() method: News[] = [];

  @Input() posts: number = 0;

  ngOnInit(): void {}
}
