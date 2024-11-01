import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  public region:Country[] = [];

  constructor( private countryService: CountriesService ) {  }

  searchByRegion( pais: string ): void {
    this.countryService.searchRegion( pais )
    .subscribe( countries => {
      this.region = countries;
      console.log(countries);
    });
    console.log(pais);
  }
}
