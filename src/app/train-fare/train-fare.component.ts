import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-train-fare',
  templateUrl: './train-fare.component.html',
  styleUrls: ['./train-fare.component.css']
})
export class TrainFareComponent implements OnInit {

  data;
  loading = true;

  constructor(private apiSerivce: StatusService) {  }

  getTrainFare(): void {
    this.apiSerivce.getTrainFare().subscribe(jsonData => {
      this.data = jsonData;
      this.loading = false;
      console.log(this.data);
    });
  }
  ngOnInit() {
    this.getTrainFare();
  }
}
