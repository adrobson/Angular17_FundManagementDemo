import { Component } from'@angular/core';
import { Fund } from '../../interfaces/fund';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { OuterState } from '../../store/reducers/app.reducers';
import { selectFundList } from '../../store/selectors/fund-list.selector';
import { selectSelectedCountry } from '../../store/selectors/selected-country.selector';
import { loadFunds } from '../../store/actions/fund.actions';


@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrl: './funds.component.css'
})
export class FundsComponent {
  selectedCountryId?:number;
  funds$:Observable<Fund[]> = new Observable<Fund[]>();

  constructor(private store:Store<OuterState>) {
    this.funds$ = this.store.pipe(select(selectFundList));
  }

  ngOnInit(): void {
    this.store.pipe(select(selectSelectedCountry)).subscribe(x => {
      this.getData(x);
    });
  }
  
  getData(countryId:number): void {
     this.store.dispatch(loadFunds({selectedCountryId:countryId}));
  } 
}
