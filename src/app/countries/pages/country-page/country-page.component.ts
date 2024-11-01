import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent  implements OnInit {

  public country?: Country;


  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountriesService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.countryService.searchcountryByalphaCode( id ))
    )
    .subscribe( (resp) => {
      if (!resp) return this.router.navigateByUrl('');

      this.country = resp;
      return ;
    } );
  }
}
