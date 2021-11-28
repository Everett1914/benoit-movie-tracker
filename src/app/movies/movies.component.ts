import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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
  dataSource = new MatTableDataSource<ShowElement>();

  ngOnInit(): void {
    this.getAllShows();
  }

  getAllShows(): void {
    this.showsService.getAllShows()
    .subscribe(shows => this.dataSource = new MatTableDataSource(shows));
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}