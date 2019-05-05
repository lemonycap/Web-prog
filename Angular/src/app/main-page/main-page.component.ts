import { Component, OnInit, Input  } from '@angular/core';
import {mainPageTourList} from './mainPageTourList';
import {PAGES} from './mockList';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})

export class MainPageComponent implements OnInit {
 
  public position:String ="class1";

  ngOnInit() {
  }

  constructor() {   }
 
  name = "Main page";
  list = PAGES;
  selectedPage: mainPageTourList;

  
 
  onSelect(page: mainPageTourList): void {
    this.selectedPage = page;
    this.position  = "class"+page.id;
  }
}
