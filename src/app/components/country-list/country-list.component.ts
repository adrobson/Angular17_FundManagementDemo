import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { FinancialsService } from '../../services/financials.service';
import { StateStoreService } from '../../services/state-store.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})

export class CountryListComponent {
  
  SelectedCountryId?:number;
  countrys:Country[] = [];

  constructor(private financialsService: FinancialsService, private stateStore:StateStoreService) {
    if(stateStore.getSelectedCountryId() != -1){
      this.SelectedCountryId = stateStore.getSelectedCountryId();
    }
  } 

  ngOnInit(): void {
    this.getCountrys();
  }

  getCountrys(): void {
    this.financialsService.getCountrys().subscribe(      
      countrys => {
        this.countrys = countrys; 
      }
    );
  }

  onChange(){
    if(this.SelectedCountryId != null){
      this.stateStore.setSelectedCountry(this.SelectedCountryId); 
    }
  }
}
