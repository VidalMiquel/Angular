import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
selector: 'countries-by-capital-page',
templateUrl: './by-capital-page.component.html',
styles: ``
})

export class ByCapitalPageComponent implements OnInit{

  public countries: Country[] = []
  public isLoading: boolean = false
  public initialValue: string = '';

  constructor(private countriesSErvice:CountriesService){}

  ngOnInit(): void {
   this.countries = this.countriesSErvice.cacheStore.byCapital.countries;
  this.initialValue = this.countriesSErvice.cacheStore.byCapital.term;
  }

  searchByCaptial(term:string):void{
    this.isLoading = true
    //we have to sbuscribe to the Observable(definded at Service)
    this.countriesSErvice.searchCapital(term).subscribe(countires =>{
      this.countries = countires
      this.isLoading = false;
    });
  }



}
