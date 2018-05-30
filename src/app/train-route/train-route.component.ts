import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-train-route',
  templateUrl: './train-route.component.html',
  styleUrls: ['./train-route.component.css']
})
export class TrainRouteComponent implements OnInit {

  data;
  loading = true;

  constructor(private apiSerivce: StatusService) {  }

  getTrainRoute(): void {
    this.apiSerivce.getTrainRoute().subscribe(jsonData => {
      this.data = jsonData;
      this.loading = false;
      console.log(this.data);
    });
  }
  ngOnInit() {
    this.getTrainRoute();
  }

}
