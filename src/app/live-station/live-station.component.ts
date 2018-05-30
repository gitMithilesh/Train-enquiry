import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/add/operator';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-live-station',
  templateUrl: './live-station.component.html',
  styleUrls: ['./live-station.component.css']
})
export class LiveStationComponent implements OnInit {

  data;
  loader = false;
  stationName = '';
  hours = '2';
  constructor(private apiSerivce: StatusService) {  }

  getStationStatus(): void {
    console.log(this.stationName);
    this.loader = true;
    this.apiSerivce.getLiveStation().subscribe(jsonData => {
      this.data = jsonData;
      this.loader = false;
      console.log(this.data);
    });
  }
  ngOnInit() {
     this.getStationStatus();
  }
}
