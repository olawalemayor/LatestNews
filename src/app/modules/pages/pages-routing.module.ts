import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent, CategoryComponent } from '../../view';

const routes: Routes = [
  { path: 'news', redirectTo: '', pathMatch: 'full' },
  { path: 'category', redirectTo: '', pathMatch: 'full' },
  { path: 'news/:title', component: BlogComponent },
  { path: 'category/:title', component: CategoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
