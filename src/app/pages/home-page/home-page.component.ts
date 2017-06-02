import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  providers: [DataService]

})
export class HomePageComponent implements OnInit {

  public products: any[];
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.getProducts().subscribe(result => {
      this.products = result;
      console.log(result);
    }, error => {
      localStorage.removeItem('fc.token');

      this.router.navigateByUrl('/');
    });
  }

}
