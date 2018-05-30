import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-seat-avalibility',
  templateUrl: './seat-avalibility.component.html',
  styleUrls: ['./seat-avalibility.component.css']
})
export class SeatAvalibilityComponent implements OnInit {
  data;
  loading = true;

  constructor(private apiSerivce: StatusService) {  }

  getTrainAvalability(): void {
    this.apiSerivce.getSeatAvalability().subscribe(jsonData => {
      this.data = jsonData;
      this.loading = false;
      console.log(this.data);
    });
  }
  ngOnInit() {
  this.getTrainAvalability();
  }

}
