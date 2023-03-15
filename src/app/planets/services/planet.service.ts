import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concatAll, map, Observable, take, toArray } from "rxjs";
import { Page } from '../models/page';
import { Planet } from '../models/planet';

const BASE_URL = 'https://swapi.dev/api/';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  planetsUrl = `${BASE_URL}planets`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Planet[]> {
    return this.http.get<Page<Planet>>(this.planetsUrl)
      .pipe(
        map(response => response.results),
        concatAll(),
        take(2),
        toArray()
      );
  }
}
