import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { catchError,  map,  Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';


  constructor(private httpClient: HttpClient) {

   }

   searchcountryByalphaCode( code: string ):Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.httpClient.get<Country[]>(url).
    pipe(
      map( countries => countries.length > 0 ? countries[0]: null ),
      catchError( err => of(null) ));
   }

   searchCapital( capital: string ):Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${capital}`;
    return this.httpClient.get<Country[]>(url).pipe(
      catchError( err => of([]) )
    );
   }

  searchCountry(term: string):Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.httpClient.get<Country[]>(url).pipe(
      catchError( err => of([]) ));
  }
  searchRegion(region: string):Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.httpClient.get<Country[]>(url).pipe(
      catchError( err => of([]) ));
  }

}
