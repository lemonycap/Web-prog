import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { GeneralInfoPageComponent } from './general-info-page/general-info-page.component';
import {MenuTabComponent} from './menu-tab/menu-tab.component';
import { from } from 'rxjs';


const appRoutes: Routes = [
  { path: 'home',component: MainPageComponent },
  { path: 'routes',component: SearchPageComponent },
  { path: 'articles',component: GeneralInfoPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SearchPageComponent,
    GeneralInfoPageComponent,
    MenuTabComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
