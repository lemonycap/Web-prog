import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-tab',
  templateUrl: './menu-tab.component.html',
  styleUrls: ['./menu-tab.component.scss']
})
export class MenuTabComponent implements OnInit {

  constructor() { }

  navLinks = [
    {path:'home', label:'Home'},
    {path:'routes',label:'All Routes'},
    {path:'articles',label:'Articles'},
  ];


  ngOnInit() {
  }

}
