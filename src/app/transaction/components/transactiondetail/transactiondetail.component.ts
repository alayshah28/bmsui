import { Component, OnInit } from '@angular/core';
import { TransactionDetailService } from '../../services/transaction-detail.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-transactiondetail',
  templateUrl: './transactiondetail.component.html',
  styleUrls: ['./transactiondetail.component.scss']
})
export class TransactiondetailComponent implements OnInit {

  constructor(public service: TransactionDetailService,private toast: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

}
