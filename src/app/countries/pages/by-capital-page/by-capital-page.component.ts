import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries:Country[] = [];

  constructor( private countryService: CountriesService ) {  }

  searchByCapital( capital: string ): void {
    this.countryService.searchCapital( capital )
    .subscribe( countries => {
      this.countries = countries;
      console.log(countries);
    });
    console.log(capital);
  }

}
