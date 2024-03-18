import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { FundsComponent } from './components/funds/funds.component';
import { StocksComponent } from './components/stocks/stocks.component';
import { StoreModule } from '@ngrx/store';
import * as appReducers from './store/reducers/app.reducers';
import { CountryEffects } from './store/effects/country.effects';
import { StockEffects } from './store/effects/stock.effects';
import { FundEffects } from './store/effects/fund.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    FundsComponent,
    StocksComponent,
    HomeComponent,
    CountryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([CountryEffects, StockEffects, FundEffects]),
    StoreModule.forRoot({appState:appReducers.appReducers}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
