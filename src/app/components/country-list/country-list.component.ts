import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { FinancialsService } from '../../services/financials.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})

export class CountryListComponent {
  
  SelectedCountryId:number = 1;
  countrys:Country[] = [];

  constructor(private financialsService: FinancialsService) {

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
    this.financialsService.selectCountry(this.SelectedCountryId);
  }
}
