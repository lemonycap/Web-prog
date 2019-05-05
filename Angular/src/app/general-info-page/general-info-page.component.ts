import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-general-info-page',
  templateUrl: './general-info-page.component.html',
  styleUrls: ['./general-info-page.component.scss']
})
export class GeneralInfoPageComponent implements OnInit {
  testString:String;


  constructor() {
   
    this.testString = 'font-color:red';
   }

  
  ngOnInit() {
  }

}
