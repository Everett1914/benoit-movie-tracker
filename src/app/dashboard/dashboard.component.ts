import { Component, OnInit } from '@angular/core';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { ShowElement } from '../ShowElement';
import { ShowsService } from '../shows.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  shows: ShowElement[] = [];

  constructor( private showsService: ShowsService ) { }

  ngOnInit(): void {
  }
  
  onClickSubmit(data: any) {
      console.log(data)
      this.showsService.addShow({name:data.name, genre:data.genre, source:data.source, cost:Number(data.cost), type:data.type} as ShowElement)
        .subscribe(show => {
          this.shows.push(show);
        });
  }
}
