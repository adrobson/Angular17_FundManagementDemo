import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadCountrys, selectCountry } from '../../store/actions/country.actions';
import { OuterState } from '../../store/reducers/app.reducers';
import { selectCountryList  } from '../../store/selectors/country-list.selector';
import { selectSelectedCountry } from '../../store/selectors/selected-country.selector';


@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})

export class CountryListComponent {
  
  countrys$: Observable<Country[]> = new Observable<Country[]>();
  SelectedCountryId: number = 0;

  constructor(private store: Store<OuterState>) {
    this.countrys$ = this.store.pipe(select(selectCountryList));
    this.store.dispatch(loadCountrys());  
  } 

  ngOnInit(): void {
    this.store.pipe(select(selectSelectedCountry)).subscribe(x => {
            this.SelectedCountryId = x;
        });
  }

  onChange(){
    console.log("country selected");
    this.store.dispatch(selectCountry({selectedCountryId:this.SelectedCountryId})); 
  }
}
