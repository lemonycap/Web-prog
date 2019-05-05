import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-route-details',
  templateUrl: './route-details.component.html',
  styleUrls: ['./route-details.component.scss']
})
export class RouteDetailsComponent implements OnInit {

  @Input("position") public visualisationRoutes :String;

  public strTest:String ="class2";
 
getPosition() { return this.visualisationRoutes; }

  test() {
    console.log(this.visualisationRoutes);
  }


  constructor() { }

  ngOnInit() {
  }

}
