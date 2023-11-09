import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import {  Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';










@Component({
  selector: 'app-local-tripsheet',
  templateUrl: './local-tripsheet.component.html',
  styleUrls: ['./local-tripsheet.component.css']
})
export class LocalTripsheetComponent {
  lr_number!:number;
  consignee_name!:string;
  consignor_name!:string;
  delivery_contact!:number;
  payment_type!:string;
  topay_amount!:number;
  vehicle_number!:string;
  ewaybill_number!:number;
  driver_id!:number;
  driver_name!:string;
  ReadOnlyFlag:boolean=false
  LR_error_flag:boolean=false

   pending_localdelivery={
lr_number:175421,
consignee_name:"Freudenberg",
consignor_name:"Aaditya Birla",
delivery_contact:7092886939,
payment_type:"TO PAY",
topay_amount:5400,
vehicle_number:"TN05BT9501",
ewaybill_number:5839201819,
driver_id:24451,
driver_name:'Shanmugam'

  }


  information_pull(lr_number:any)
  {

console.log(lr_number);

if (lr_number===514452){
this.ReadOnlyFlag=true
this.consignee_name="FREUDENBERG"
this.consignor_name="AADITYA BIRLA"
this.delivery_contact=7092886939
this.payment_type="TOPAY"
this.topay_amount=5400
this.ewaybill_number=5839201819
this.LR_error_flag=false  
}

else if (lr_number===514453)
{

  this.ReadOnlyFlag=true
  this.consignee_name="Gateak Inida pvt. Ltd"
  this.consignor_name="AADITYA BIRLA"
  this.delivery_contact=8667411084
  this.payment_type="Paid"
  this.topay_amount=5400
  this.ewaybill_number=5839201820
  this.LR_error_flag=false

}

else{

console.log("ERROR")
  this.LR_error_flag=true
}


}


Delivery_Request(form:NgForm)
{

console.log(form.value)

}


}
