import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of} from 'rxjs';
import { Country } from '../interfaces/country';


@Injectable({providedIn: 'root'})
export class CountriesService {
  constructor(private http: HttpClient) { }
  private apiUrl: string = 'https://restcountries.com/v3.1';


  searchCountryByAlphaCode(alphaCode:string): Observable<Country[]>{

    const url= `${this.apiUrl}/alpha/${alphaCode}`;
    return this.http.get<Country[]>(url)
      .pipe(
        //Return void []
        catchError(error => of([]) )
      );

  }

  searchCapital(term:string): Observable<Country[]>{
    const url= `${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>(url)
      .pipe(
        //Return void []
        catchError(error => of([]) )
      );
  }

  searchCountry(term:string): Observable<Country[]>{
    const url= `${this.apiUrl}/name/${term}`;
    return this.http.get<Country[]>(url)
      .pipe(
        //Return void []
        catchError(error => of([]) )
      );
  }


  searchRegion(term:string): Observable<Country[]>{
    const url= `${this.apiUrl}/region/${term}`;
    return this.http.get<Country[]>(url)
      .pipe(
        //Return void []
        catchError(error => of([]) )
      );
  }


}


