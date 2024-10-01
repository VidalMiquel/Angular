import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
selector: 'countries-by-capital-page',
templateUrl: './by-capital-page.component.html',
styles: ``
})

export class ByCapitalPageComponent {

  public countries: Country[] = []
  constructor(private countriesSErvice:CountriesService){}

  searchByCaptial(term:string):void{
    //we have to sbuscribe to the Observable(definded at Service)
    this.countriesSErvice.searchCapital(term).subscribe(countires =>{
      this.countries = countires
    });
  }
}
