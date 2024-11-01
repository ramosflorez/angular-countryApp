import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public countries:Country[] = [];

  constructor( private countryService: CountriesService ) {  }

  searchByPais( pais: string ): void {
    this.countryService.searchCountry( pais )
    .subscribe( countries => {
      this.countries = countries;
      console.log(countries);
    });
    console.log(pais);
  }

}
