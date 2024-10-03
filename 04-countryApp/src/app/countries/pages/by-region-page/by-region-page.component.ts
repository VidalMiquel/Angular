import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public regions:Region[] = ['Africa','Asia','Europe','Oceania','America'];
  public countries: Country[] = []
  public isLoading: boolean = false
  public selectedRegion?: Region

  constructor(private countriesSErvice:CountriesService){}

  ngOnInit(): void {
    this.countries = this.countriesSErvice.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesSErvice.cacheStore.byRegion.region;
  }

  searchByRegion(term:Region):void{
    this.selectedRegion = term;
    this.isLoading = true;
    //we have to sbuscribe to the Observable(definded at Service)
    this.countriesSErvice.searchRegion(term)
    .subscribe(countires =>{
      this.countries = countires
      this.isLoading = false;
    });
  }
}
