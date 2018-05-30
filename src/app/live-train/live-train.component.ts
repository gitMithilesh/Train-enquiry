import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-live-train',
  templateUrl: './live-train.component.html',
  styleUrls: ['./live-train.component.css']
})
export class LiveTrainComponent implements OnInit {

  data;
  loading = true;

  constructor(private apiSerivce: StatusService) {  }

  getTrainStatus(): void {
    this.apiSerivce.getTrainStatus().subscribe(jsonData => {
      this.data = jsonData;
      this.loading = false;
      console.log(this.data);
    });
  }
  ngOnInit() {
    this.getTrainStatus();
  }
}
