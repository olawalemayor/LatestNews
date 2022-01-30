import { NgModule } from '@angular/core';
import { HomeComponent, BlogComponent, CategoryComponent } from '../../view';
import { SectionCardComponent, SideBarComponent } from '../../common';
import { CarouselModule } from 'ng-carousel-cdk';
import { AppMaterialModule } from '../app-material/app-material.module';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [
    CarouselModule,
    AppMaterialModule,
    CommonModule,
    PagesRoutingModule,
  ],
  declarations: [
    HomeComponent,
    SectionCardComponent,
    SideBarComponent,
    BlogComponent,
    CategoryComponent,
  ],
})
export class PagesModule {}
