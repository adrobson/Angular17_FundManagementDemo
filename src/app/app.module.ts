import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FundsComponent } from './components/funds/funds.component';
import { StocksComponent } from './components/stocks/stocks.component';
import { HomeComponent } from './components/home/home.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { FinancialsState } from './state/financials.state';


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
    NgxsModule.forRoot([FinancialsState], {
      developmentMode: !environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
