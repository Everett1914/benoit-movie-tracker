import { Component, OnInit } from '@angular/core';
import { ShowElement } from '../ShowElement';
import { ShowsService } from '../shows.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {

  shows: ShowElement[] = [];

  constructor( private showsService: ShowsService ) { }

  displayedColumns: string[] = ['position', 'name', 'genre', 'source', 'cost', 'type'];

  ngOnInit(): void {
    this.getAllShows();
  }

  getAllShows(): void {
    this.showsService.getAllShows()
    .subscribe(shows => this.shows = shows);
  }

}
