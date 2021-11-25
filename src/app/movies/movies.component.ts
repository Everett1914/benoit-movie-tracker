//import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { ShowElement } from '../ShowElement';
import { ShowsService } from '../shows.service';

const ELEMENT_DATA: ShowElement[] = [
  {show_id: 1, name: 'The Warriors', genre: 'Action', source: 'Google Play', cost: 3.99, type: "Movie"},
  {show_id: 2, name: 'Escape From New York', genre: 'Action', source: 'Google Play', cost: 3.99, type: "Movie"},
  {show_id: 3, name: 'Alien', genre: 'Sci-Fi/Fantasy', source: 'Google Play', cost: 3.99, type: "Movie"}, 
  {show_id: 4, name: 'Hamburger Hill', genre: 'Action', source: 'Google Play', cost: 3.99, type: "Movie"}, 
  {show_id: 5, name: 'The Wrath of Khan', genre: 'Sci-Fi/Fantasy', source: 'Google Play', cost: 3.99, type: "Movie"}, 
  {show_id: 6, name: 'The Thing', genre: 'Sci-Fi/Fantasy', source: 'Google Play', cost: 3.99, type: "Movie"}, 
  {show_id: 7, name: 'Invasion of the Body Snatchers', genre: 'Sci-Fi/Fantasy', source: 'Google Play', cost: 3.99, type: "Movie"}, 
  {show_id: 8, name: 'Dr. Strangelove', genre: 'Drama', source: 'Google Play', cost: 3.99, type: "Movie"}, 
  {show_id: 9, name: 'Aniara', genre: 'Sci-Fi/Fanatasy', source: 'Google Play', cost: 3.99, type: "Movie"}, 
  {show_id: 10, name: 'Juice', genre: 'Drama', source: 'Google Play', cost: 3.99, type: "Movie"}, 
  {show_id: 11, name: 'Little Axe', genre: 'Action', source: 'Google Play', cost: 3.99, type: "Television"}, 
  {show_id: 12, name: 'Dr. Who', genre: 'Sci-Fi/Fantasy', source: 'Google Play', cost: 3.99, type: "Television"},
  {show_id: 13, name: 'Keeping Up Appearances', genre: 'Comedy', source: 'Google Play', cost: 3.99, type: "Television"},
];
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {

  shows: ShowElement[] = [];

  constructor( private showsService: ShowsService ) { }

  displayedColumns: string[] = ['position', 'name', 'genre', 'source', 'cost', 'type'];
  //DataSource = ELEMENT_DATA;

  ngOnInit(): void {
    this.getAllShows();
  }

  getAllShows(): void {
    this.showsService.getAllShows()
    .subscribe(shows => this.shows = shows);
  }
  DataSource = this.shows;

}
