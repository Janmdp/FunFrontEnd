import { Component, OnInit } from '@angular/core';
import { TradeService } from 'src/app/shared/trades/trade.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mytrades',
  templateUrl: './mytrades.component.html',
  styleUrls: ['./mytrades.component.css']
})
export class MytradesComponent implements OnInit {

  constructor(public tradeService: TradeService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.tradeService.myTradeList();
  }

  deleteTrade(Id: number){
    console.log(Id);
    this.tradeService.deleteTrade(Id).subscribe(
      res => {
        console.log("send help")
        this.tradeService.myTradeList();
        this.toastr.success('Deleted successfully', 'Trade deleted');
      },
      err => {
        console.log(err)
      }
    );;
  }
}
