import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [MatButtonModule, MatButtonToggleModule, MatCardModule],
  exports: [MatButtonModule, MatButtonToggleModule, MatCardModule],
})
export class AppMaterialModule {}
