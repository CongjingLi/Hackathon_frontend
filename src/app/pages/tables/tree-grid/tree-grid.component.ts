import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { StockholdService } from '../../../service/stockhold.service';
import Chart from 'chart.js';
import { Events } from '../../../domain/event';

@Component({
  selector: 'ngx-tree-grid',
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.scss'],
})

export class TreeGridComponent implements OnInit{
  events!: Observable<Events[]>;
  startTime!:Date;
  endTime!:Date;
  accoundId!:number;
  tradeAmountByDay!:Object;
  dateWithTrades!: Array<string>;
  amountByDay!: Array<number>;

  constructor(private stockholdService: StockholdService,
    private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }


  reloadData() {

    this.events = this.stockholdService.getStockholdList();
  }

  // deleteStock(ticker: string) {
  //   this.stockService.deleteStock(ticker)
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.reloadData();
  //       },
  //       error => console.log(error));
  // }

  stockDetails(ticker: string){
    this.router.navigate(['pages/ui-features/typography', ticker]);
  }
}
