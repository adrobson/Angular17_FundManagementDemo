import { Component } from '@angular/core';
import { FinancialsService } from '../../services/financials.service';
import { Fund } from '../../interfaces/fund';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrl: './funds.component.css'
})
export class FundsComponent {
  selectedCountryId?:number;
  funds: Fund[] = [];

  constructor(private financialsService: FinancialsService) {
    financialsService.selectedCountry.subscribe(x => 
    {
        this.getData(Number(x));
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
