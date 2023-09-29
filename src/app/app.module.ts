import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './comps/start-page/start-page.component';
import { Blog1Component } from './comps/blogs/blog1/blog1.component';
import { Blog2Component } from './comps/blogs/blog2/blog2.component';
import { Blog3Component } from './comps/blogs/blog3/blog3.component';
import { TopBarComponent } from './comps/top-bar/top-bar.component';
import { PageNotFound1Component } from './comps/page-not-found/page-not-found1/page-not-found1.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    Blog1Component,
    Blog2Component,
    Blog3Component,
    TopBarComponent,
    PageNotFound1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
