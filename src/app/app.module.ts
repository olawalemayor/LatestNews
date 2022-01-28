import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './UI/header/header.component';
import { HomeComponent } from './view/home/home.component';
import { AppMaterialModule } from './modules/app-material/app-material.module';
import { SectionCardComponent } from './common/section-card/section-card.component';
import { IgxCarouselModule, IgxSliderModule } from 'igniteui-angular';
import { FooterComponent } from './UI/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SectionCardComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppMaterialModule,
    IgxCarouselModule,
    IgxSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
