import { Component, OnInit } from '@angular/core';
// import { Stock } from '../../../domain/stock';
import { Router, ActivatedRoute } from '@angular/router';
import { FundService } from '../../../service/fund.service';
import { Fund } from '../../../domain/fund';
import { FundholdService } from '../../../service/fundhold.service';
import { NbThemeService } from '@nebular/theme';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { Fundhis } from '../../../domain/fundhis';
import { Documents } from '../../../domain/documents';
import { StockService } from '../../../service/stock.service';

@Component({
  selector: 'ngx-typography',
  styleUrls: ['./fund-details.component.scss'],
  templateUrl: './fund-details.component.html',
})
export class FundDetailsComponent  implements OnInit {
  stock!:Documents;
  id!:string

  constructor(private route: ActivatedRoute,private router: Router,private stockService: StockService) {

      //  this.id = this.route.snapshot.params['code'];
    }


  ngOnInit() {
    this.stock = new Documents();

    this.id = this.route.snapshot.params['code'];

    this.stockService.getStock(this.id)
    .subscribe(data => {
      // console.log(data)
      this.stock = data;
    }, error => console.log(error));
  }


  
}
