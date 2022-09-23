import { Injectable } from '@angular/core';
import { Accountmodel } from '../models/accountmodel.model';
import  {HttpClient} from '@angular/common/http';
import { Initaccountmodel } from '../models/initaccountmodel.model';
@Injectable({
  providedIn: 'root'
})
export class AccountdetailsService {

  constructor(private http:HttpClient) { }
  
  formData:Accountmodel=new Accountmodel()
  list!:Initaccountmodel[];
 
  baseUrl='http://localhost:5000/api/Account';
  
  postAccountDetail()
  {
    this.baseUrl=this.baseUrl+this.formData.accountType;
    return this.http.post(this.baseUrl,this.formData);
  }
  refreshList(){
    
    this.http.get(this.baseUrl+'/GetAllAccounts').toPromise().then(response =>this.list=response as Initaccountmodel[])
  }
  deleteAccount(id:number,acType:string){
    this.baseUrl=this.baseUrl+'/DeleteAccount?accType='+acType+'&accountno='+id;
    return this.http.delete(this.baseUrl)
  } 
}
