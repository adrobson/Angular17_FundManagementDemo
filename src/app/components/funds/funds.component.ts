import { Component } from '@angular/core';
import { FinancialsService } from '../../services/financials.service';
import { Fund } from '../../interfaces/fund';
import { StateStoreService } from '../../services/state-store.service';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrl: './funds.component.css'
})
export class FundsComponent {
  selectedCountryId?:number;
  funds: Fund[] = [];

  constructor(private financialsService: FinancialsService, private stateStore:StateStoreService) {
     this.stateStore.getSelectedCountry().subscribe(x => {
        this.getData(x);
    });
  }

  ngOnInit(): void {
    
  }
  
  getData(selectedCountryId:number): void {
    this.financialsService.getFunds(selectedCountryId).subscribe(      
      funds => {
        this.funds = funds; 
        console.log(funds);
      }
    );
  }
}
