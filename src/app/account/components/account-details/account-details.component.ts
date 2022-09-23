import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountdetailsService } from '../../services/accountdetails.service';


@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  constructor(public service: AccountdetailsService,private toast: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList()
  }
  onDelete(id:number,acType:string)
  {
   this.service.deleteAccount(id,acType).subscribe(
    res=>{
      this.service.refreshList();
      this.toast.error("Deleted Sucessfully",'Registered');
      
    },
    err=>{console.log(err);}
   ) 
  }
}
