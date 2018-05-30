import {Injectable} from '@angular/core';
 import {Http, Response} from '@angular/http';
 import {Observable} from 'rxjs/Observable';

@Injectable()
export class StatusService {
  private trainLiveAPI = 'https://api.railwayapi.com/v2/live/train/12553/date/17-04-2018/apikey/3s2yqi3xjf/';
  stationLiveAPI = '';

  constructor(private http: Http) { }

  getTrainStatus (): Observable<JSON> {
    return this.http.get('./assets/train-status.json')
      .map(data => data.json());
  }
  getLiveStation (): Observable<JSON> {
    this.stationLiveAPI = './assets/live-station.json';
    return this.http.get(this.stationLiveAPI)
      .map(data => data.json());
  }
  getTrainRoute (): Observable<JSON> {
    this.stationLiveAPI = './assets/train-route.json';
    return this.http.get(this.stationLiveAPI)
      .map(data => data.json());
  }
  getTrainFare (): Observable<JSON> {
    this.stationLiveAPI = './assets/train-fare.json';
    return this.http.get(this.stationLiveAPI)
      .map(data => data.json());
  }
  getSeatAvalability (): Observable<JSON> {
    this.stationLiveAPI = './assets/seat-availability.json';
    return this.http.get(this.stationLiveAPI)
      .map(data => data.json());
  }
  getTrains (): Observable<JSON> {
    this.stationLiveAPI = './assets/between-stations.json';
    return this.http.get(this.stationLiveAPI)
      .map(data => data.json());
  }
}
