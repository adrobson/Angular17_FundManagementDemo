import { createAction, props } from '@ngrx/store';
import { Stock } from '../../interfaces/stock';


export const loadStocks = createAction(
  '[Stock] Load Stocks',
  props<{ selectedCountryId: number }>()
);

export const loadStocksSuccess = createAction(
  '[Stock] Load Stocks Success',
  props<{ payload: Stock[] }>()
);