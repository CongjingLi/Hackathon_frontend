import { Component, OnInit } from '@angular/core';
import { Stock } from '../../../domain/stock';
import { Router, ActivatedRoute } from '@angular/router';
import { StockService } from '../../../service/stock.service';
import { StockholdService } from '../../../service/stockhold.service';
import { Stockhis } from '../../../domain/stockhis';
import { Observable  } from 'rxjs';
import { NbThemeService } from '@nebular/theme';
import { map } from 'rxjs/operators'

@Component({
  selector: 'ngx-typography',
  styleUrls: ['./typography.component.scss'],
  templateUrl: './typography.component.html',
})
export class TypographyComponent  implements OnInit {

  ticker!: string;
  stock!: Stock;
  stockhiss:Observable<Stockhis[]>;
  buyAmount!: number
  id!:number
  buySuccessMessage: boolean = false;
  data: {};
  options: any;
  themeSubscription: any;

  
  


  constructor(private route: ActivatedRoute,private router: Router,
    private stockService:StockService,
    private stockholdService: StockholdService,private theme: NbThemeService) {
     }

  ngOnInit() {
    this.stock = new Stock();

    this.ticker = this.route.snapshot.params['ticker'];
    // console.log(this.ticker)

    this.stockService.getStock(this.ticker)
      .subscribe(data => {
        this.stock = data;
      }, error => console.log(error));


      
}


  buyStocks() {
    this.id=4
    this.stockholdService
    .buystock(this.id,this.ticker,this.buyAmount).subscribe(data => {
        if (data === true) {
          this.buySuccessMessage = true; 
        } else {
          this.buySuccessMessage = false;
        }

    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.buyStocks();    
  }

}
