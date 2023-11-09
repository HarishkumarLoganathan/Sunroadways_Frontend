import { Component } from '@angular/core';
import { VehicleinfoService } from '../../services/vehicleinfo.service';
import {DeliveryserviceService} from '../../services/deliveryservice.service'

import { Router } from '@angular/router';

@Component({
  selector: 'app-consignment-details',
  templateUrl: './consignment-details.component.html',
  styleUrls: ['./consignment-details.component.css']
})
export class ConsignmentDetailsComponent {
  Lr_Number:any;
  

Consignment={


  Booking_Date:'25-05-2023',
  Booking_Branch:'Chennai_Ambt',
  Booking_Time:'2023-05-10 09:30:00',
  Consignor_Name:'FREUDENBERG',
  Consignee_Name:'AADITYA BIRLA',
  Delivery_Eta:'2023-05-11 09:30:00',
  Delivery_Type:'DOOR DELIVERY',
  Delivery_Place:'KORAMANGALA',
  Delivery_Pincode:'560034',
  Delivery_Contact:8667411084,
  Payment_Type:'TOPAY',
  Amount:'INR 3275'

}


  constructor(private consignmentservice:VehicleinfoService,private router:Router,private deliveryservice:DeliveryserviceService)
  {}

  ngOnInit()
{
  this.consignmentservice.getLR().subscribe(data => {
    this.Lr_Number = data;

  });
}


directme_back(Lr_Number:any)
{
this.router.navigate(['/vehicledetails']);
console.log("ROUTING STARTED")


}
Initiate_Delivery(Lr_Number:any,Booking_Date:string,Booking_Branch:string,Booking_Time:string,Consignor_Name:string,Consignee_Name:string,Delivery_Eta:string,Delivery_Type:string,Delivery_Place:string,Delivery_Pincode:string,Delivery_Contact:number,Payment_Type:string,Amount:string)
{

console.log('DELIVERY ON PROGRESS')

this.deliveryservice.setDeliveryData(Lr_Number,Booking_Date,Booking_Branch,Booking_Time,Consignor_Name,Consignee_Name,Delivery_Eta,Delivery_Type,Delivery_Place,Delivery_Pincode,Delivery_Contact,Payment_Type,Amount)
this.router.navigate(['/deliveryrequest']);

}


}
