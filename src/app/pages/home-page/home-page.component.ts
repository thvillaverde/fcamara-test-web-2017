import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  providers: [DataService]
  
})
export class HomePageComponent implements OnInit {

  public products: any[];
  constructor( private dataService: DataService) {  }

  ngOnInit() {
    this.dataService.getProducts().subscribe(result => {
      this.products = result;
      console.log(result);
    }, error =>{
      alert('Ocorreu um erro durante a requisição');
    });
  }

}
