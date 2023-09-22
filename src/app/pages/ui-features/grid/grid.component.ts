import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Stock } from "../../../domain/stock";
import { StockService } from "../../../service/stock.service";
import { Documents } from "../../../domain/documents";
@Component({
  selector: 'ngx-grid',
  styleUrls: ['./grid.component.scss'],
  templateUrl: './grid.component.html',
})
export class GridComponent implements OnInit {
  stocks!: Observable<Documents[]>;
  nameTicker!:string
  // stocks1!: Observable<Stock[]>;

  constructor(private stockService: StockService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.stocks = this.stockService.getAllDocument();
  }

  stockSearch(searchValue: string) {
    this.stocks = this.stockService.searchstock(this.nameTicker,"");
    // this.stocks1 = this.stockService.searchstock("",this.nameTicker);
  }

  stockDetails(code: string){
    this.router.navigate(['pages/ui-features/funddetails', code]);
  }

  
}

