import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import {  Validators } from '@angular/forms';
import { BrowserMultiFormatReader , BrowserQRCodeReader} from '@zxing/library';
import {HttpClient,HTTP_INTERCEPTORS,HttpHeaders, HttpResponse} from '@angular/common/http';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent {


    

  


  constructor(private http:HttpClient) {
this.monthly_flag="m"
    
   }
  

  

pickup_location!:string
drop_location!:string
nearest_branch!:string
article_count!:number
consignment_weight!:number
vehicle_type!:string
container_type!:string
pickup_date!:Date
pickup_time!:Date
delivery_type!:string
consignee_name!:string
consignee_gst!:string
consignee_address!:string
consignee_area!:string
consignee_city!:string
consignee_pincode!:number
consignee_contact!:number
consignor_name!:string
consignor_gst!:string
consignor_address!:string
consignor_area!:string
consignor_city!:string
consignor_pincode!:number
consignor_contact!:number
pickup_type!:string
payment_by!:string
payment_type!:string
charge_by!:string
charged_weight!:number
charge_per_article!:number
weight_flag:boolean=false
article_flag:boolean=false
custom_flag:boolean=false
freight_amount!:number
invoice_number:string[]=[];
ewaybill_number!:number
invoice_bill!:File
invoice!:string
eway_bill!:File
consignment_description!:string
monthly_flag!:string
hamali_charge!:number
delivery_charge!:number
pickup_charge!:number
pickup_branch_id!:string|null

 ploc = ["Chennai", "Bangalore", "Coimbatore"];

 Branches = {
  'Chennai': ['Ambattur','Vellapanchavadi','Wall Tax Road'],
  'Bangalore': ['Bommasandra','Chamarajpet','Peenya'],
  'Coimbatore': ['Saravanmpatti','Sarasdfd'],

};

Vehicle=['Mini Truck','407','17 feet','20 feet']



fetch_billinginfo(payment_by:string)
{
if (payment_by==="CONSIGNOR (Payment by Booking Party)" && this.payment_type=="MONTHLY BILLING")
{
if (this.consignor_gst=="33AEEFS8225D1Z8")
{
this.charge_by="ARTICLE"
this.charge_per_article=250
this.article_flag=true
this.weight_flag=false
this.custom_flag=false
this.freight_amount=0
this.freight_amount=this.charge_per_article*this.article_count
console.log("ARTICLE")

}

}
else if (payment_by==="CONSIGNEE(Payment by Delivery Party)" && this.payment_type=="MONTHLY BILLING")
{
if (this.consignor_gst=="33AEEFS8225D1Z8")
{
  this.charge_by="WEIGHT"
  this.charged_weight=5
  this.weight_flag=true
this.article_flag=false
this.custom_flag=false
this.freight_amount=0
this.freight_amount=this.charged_weight*this.consignment_weight
console.log("ARTICLE")
  
}

}

}

Charge_By()
{

if(this.charge_by==="WEIGHT") 
{
this.weight_flag=true
this.article_flag=false
this.custom_flag=false
this.freight_amount=0

}
else if (this.charge_by==="ARTICLE")
{
this.article_flag=true
this.weight_flag=false
this.custom_flag=false
this.freight_amount=0


}

else if (this.charge_by==="CUSTOM")
{
this.custom_flag=true
this.weight_flag=false
this.article_flag=false
this.freight_amount=0

}

}


weight_freight(weight:number)
{

this.freight_amount=weight*this.consignment_weight

}



article_freight(article:number)
{

  this.freight_amount=article*this.article_count

}


Branch_Booking(form:NgForm)

{
console.log(form.value)
const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
const formData = form.value;
this.pickup_branch_id = localStorage.getItem('usr_id');
formData.pickup_branch_id=this.pickup_branch_id
const jsonData = JSON.stringify(formData);
this.http.post('http://127.0.0.1:8000/Bookings/BranchBookings/', jsonData,{headers})
.subscribe(
  response => {
    console.log('Login success:', response);

   
   

    // Handle the successful response
  },
  error => {
   
    console.error('Login error:', error.value);


    // Handle the error response
  }
);






}

payment_flag(paymenttype:any)
{
  if (paymenttype==="PAID"|| paymenttype==="TO PAY"){
    console.log("Chaning the flag")
this.monthly_flag ="p"
  }
  else {
    this.monthly_flag="m"
  }

}


}