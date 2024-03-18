import { Country } from '../interfaces/country';
import { Stock } from '../interfaces/stock';
import { Fund } from '../interfaces/fund';

export interface AppState{
    countryList:Country[];
    selectedCountry:number;
    stockList:Stock[];
    fundList:Fund[];
}
export const initialState: AppState = {
    countryList: [], selectedCountry: -1,
    stockList: [],
    fundList: [],
}