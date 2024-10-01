import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  public countries: Country[] = []
  constructor(private countriesSErvice:CountriesService){}

  searchByRegion(term:string):void{
    //we have to sbuscribe to the Observable(definded at Service)
    this.countriesSErvice.searchRegion(term).subscribe(countires =>{
      this.countries = countires
    });
  }
}
