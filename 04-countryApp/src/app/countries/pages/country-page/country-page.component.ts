import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{

  constructor(
    private countryService: CountriesService,
    private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe(
      ({id}) => {
        this.countryService.searchCountryByAlphaCode(id)
        .subscribe(country => {console.log(country)})
      });
  }

}
