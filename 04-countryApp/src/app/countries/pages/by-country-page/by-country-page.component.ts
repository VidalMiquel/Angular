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
  constructor(private countriesSErvice:CountriesService){}

  searchByCountry(term:string):void{
    //we have to sbuscribe to the Observable(definded at Service)
    this.countriesSErvice.searchCountry(term).subscribe(countires =>{
      this.countries = countires
    });
  }
}
