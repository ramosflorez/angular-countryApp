import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-table',
  templateUrl: './countryTable.component.html',
  styles: [
    `img{
      width: 25px;
      /* height: 50px; */
    }`
  ]

})
export class CountryTableComponent {

  constructor() { }

  @Input()
  public countries: Country[] = [];

}
