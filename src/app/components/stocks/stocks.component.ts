import { Component } from '@angular/core';
import { FinancialsService } from '../../services/financials.service';
import { Stock } from '../../interfaces/stock';
import { StateStoreService } from '../../services/state-store.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.css'
})

export class StocksComponent {
  selectedCountryId?:number;
  stocks: Stock[] = [];

  constructor(private financialsService: FinancialsService, private stateStore:StateStoreService) {
   this.stateStore.getSelectedCountry().subscribe(x => {
        this.getData(x);
    });  }

  ngOnInit(): void {
  }
  
  getData(countryId:number): void {
    this.financialsService.getStocks(countryId).subscribe(stocks => this.stocks = stocks);
  } 

}
