import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';
import { FinancialsService } from '../services/financials.service';
import { Country } from '../interfaces/country';
import { Stock } from '../interfaces/stock';
import { Fund } from '../interfaces/fund';

export interface FinancialsStateModel {
    countryList:Country[];
    selectedCountryId:number;
    stockList:Stock[];
    fundList:Fund[];
}

@State({
  name: 'financials',
  defaults: {
    countryList:[],
    selectedCountryId:undefined,
    stockList:[],
    fundList:[]
  }
})

@Injectable()
export class FinancialsState {
    constructor(private financialsService:FinancialsService){
        
    }
}
