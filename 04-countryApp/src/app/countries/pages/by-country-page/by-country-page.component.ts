import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public countries: Country[] = []
  public initialValue: string = '';
  public isLoading: boolean = false
  constructor(private countriesSErvice:CountriesService){}

  ngOnInit(): void {
    this.countries = this.countriesSErvice.cacheStore.byCountries.countries;
    this.initialValue = this.countriesSErvice.cacheStore.byCountries.term;
  }
  searchByCountry(term:string):void{
    this.isLoading = true
    //we have to sbuscribe to the Observable(definded at Service)
    this.countriesSErvice.searchCountry(term).subscribe(countires =>{
      this.countries = countires
      this.isLoading = false;
    });
  }
}
