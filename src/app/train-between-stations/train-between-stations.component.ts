import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-train-between-stations',
  templateUrl: './train-between-stations.component.html',
  styleUrls: ['./train-between-stations.component.css']
})
export class TrainBetweenStationsComponent implements OnInit {

  data;
  loading = true;

  constructor(private apiSerivce: StatusService) {  }

  getTrainBetweenStations(): void {
    this.apiSerivce.getTrains().subscribe(jsonData => {
      this.data = jsonData;
      this.loading = false;
      console.log(this.data);
    });
  }
  ngOnInit() {
    this.getTrainBetweenStations();
  }

}
