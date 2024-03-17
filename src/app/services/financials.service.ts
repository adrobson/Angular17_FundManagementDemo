import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Country } from '../interfaces/country';
import { Fund } from '../interfaces/fund';
import { Stock } from '../interfaces/stock';

@Injectable({
  providedIn: 'root'
})
export class FinancialsService {

  private apiUrl = 'https://localhost:7269/';
  private countrysUrl = this.apiUrl + 'countrys';
  private fundsUrl = this.apiUrl + 'funds';
  private stocksUrl = this.apiUrl + 'stocks';

  constructor(private http:HttpClient) { }

  selectedCountry = new Subject();
  
  selectCountry(countryId:number){
    this.selectedCountry.next(countryId);
  }

  getCountrys(): Observable<Country[]> {    
    return this.http.get<Country[]>(this.countrysUrl);
  }

  getFunds(selectedCountryId:number): Observable<Fund[]> {
    return this.http.get<Fund[]>(this.fundsUrl + '?countryId=' + selectedCountryId);
  }

  getStocks(selectedCountryId:number): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.stocksUrl + '?countryId=' + selectedCountryId);
  }

}
