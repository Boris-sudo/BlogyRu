import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartPageComponent} from "./comps/start-page/start-page.component";
import {Blog1Component} from "./comps/blogs/blog1/blog1.component";
import {Blog2Component} from "./comps/blogs/blog2/blog2.component";
import {Blog3Component} from "./comps/blogs/blog3/blog3.component";
import {PageNotFound1Component} from "./comps/page-not-found/page-not-found1/page-not-found1.component";

const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'blog1', component: Blog1Component },
  { path: 'blog2', component: Blog2Component },
  { path: 'blog3', component: Blog3Component },

  { path: 'not-found-1', component: PageNotFound1Component },
  { path: '*', component: PageNotFound1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
