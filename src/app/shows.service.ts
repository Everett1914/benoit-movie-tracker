import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ShowElement } from './ShowElement';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {
  
  private showsUrl = 'https://benoit-movie-tracker-api.herokuapp.com/shows';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient ) { }

  getAllShows(): Observable<ShowElement[]> {
    return this.http.get<ShowElement[]>(this.showsUrl)
      .pipe(
        catchError(this.handleError<ShowElement[]>('getAllShows', []))
      );
  }

  addShow(show: ShowElement): Observable<ShowElement> {
    return this.http.post<ShowElement>(this.showsUrl, show, this.httpOptions)
    .pipe(
      catchError(this.handleError<ShowElement>('addShow'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
