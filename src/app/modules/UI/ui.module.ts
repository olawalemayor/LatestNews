import { NgModule } from '@angular/core';
import { FooterComponent, HeaderComponent } from '../../UI';
import { AppMaterialModule } from '../app-material/app-material.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [AppMaterialModule],
  exports: [HeaderComponent, FooterComponent],
})
export class UIModule {}
