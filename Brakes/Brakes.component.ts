import { Component,  OnInit} from '@angular/core';
import { MyMainService } from '../main.service';
import { MySharedService } from '../shared.service';

@Component({
    
    selector: 'Brakes',
    templateUrl: 'Brakes.component.html',
    styleUrls: ['Brakes.component.css']
})
export class BrakesComponent implements OnInit{
    products: any = [];
 
    constructor(
     
      private myMainService: MyMainService,
      private mySharedService: MySharedService
  ) {
     
  }
  
  ngOnInit() {
     
      this.myMainService.getProducts().subscribe(data => {
          this.products = (data as any).products;
        });
  }
}
