import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { StockHold } from "../../../domain/fundHold";
import { StockholdService } from "../../../service/stockhold.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NbThemeService } from "@nebular/theme";
import { StockHoldHis } from "../../../domain/stockholdhis";
import { map } from 'rxjs/operators'

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})
export class FormInputsComponent  {

  // inputs: { description: string, createUserName: string }[] = [{ description: '', createUserName: '' }]; // 初始化一个输入

  // addInput() {
  //   this.inputs.push({ description: '', createUserName: '' }); // 添加一个新的输入
  // }

  // removeInput(index: number) {
  //   this.inputs.splice(index, 1); // 移除指定位置的输入
  // }


}

