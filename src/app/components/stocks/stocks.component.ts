import { Component } from'@angular/core';
import { Stock } from '../../interfaces/stock';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { OuterState } from '../../store/reducers/app.reducers';
import { selectStockList } from '../../store/selectors/stock-list.selector';
import { selectSelectedCountry } from '../../store/selectors/selected-country.selector';
import { loadStocks } from '../../store/actions/stock.actions';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.css'
})

export class StocksComponent {
  stocks$:Observable<Stock[]> = new Observable<Stock[]>();
  constructor(private store:Store<OuterState>) {
    this.stocks$ = this.store.pipe(select(selectStockList));
  }

  ngOnInit(): void {
    this.store.pipe(select(selectSelectedCountry)).subscribe(x => {
      console.log("selected country id: " + x);
      this.getData(x);
    });
  }
  
  getData(countryId:number): void {
    console.log("requesting load stocks for country id: " + countryId);
     this.store.dispatch(loadStocks({selectedCountryId:countryId}));
  } 

}
