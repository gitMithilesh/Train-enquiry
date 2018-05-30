import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { StatusService } from './status.service';
import { AppComponent } from './app.component';
import { LiveTrainComponent } from './live-train/live-train.component';
import { LiveStationComponent } from './live-station/live-station.component';
import { LowerCasePipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TrainRouteComponent } from './train-route/train-route.component';
import { SeatAvalibilityComponent } from './seat-avalibility/seat-avalibility.component';
import { TrainFareComponent } from './train-fare/train-fare.component';
import { TrainBetweenStationsComponent } from './train-between-stations/train-between-stations.component';


const appRoutes: Routes = [
  { path: 'live-station', component: LiveStationComponent },
  { path: 'live-train', component: LiveTrainComponent },
  { path: 'train-route', component: TrainRouteComponent },
  { path: 'seat-avalibility', component: SeatAvalibilityComponent },
  { path: 'train-fare', component: TrainFareComponent },
  { path: 'train-between-stations', component: TrainBetweenStationsComponent },
  { path: '',   redirectTo: 'live-station', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LiveTrainComponent,
    LiveStationComponent,
    TrainRouteComponent,
    SeatAvalibilityComponent,
    TrainFareComponent,
    TrainBetweenStationsComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [StatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
