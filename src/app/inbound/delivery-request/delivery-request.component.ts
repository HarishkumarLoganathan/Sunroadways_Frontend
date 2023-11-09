import { Component } from '@angular/core';
import {DeliveryserviceService} from '../../services/deliveryservice.service'
import { Observable, forkJoin } from 'rxjs';
import { take } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-delivery-request',
  templateUrl: './delivery-request.component.html',
  styleUrls: ['./delivery-request.component.css'],

})
export class DeliveryRequestComponent {
  lrNumber!:any;
  bookingDate!:string;
  bookingBranch!:string;
  bookingTime!:string;
  consignorName!:string;
  consigneeName!:string
  deliveryEta!:string;
  deliveryType!:string;
  deliveryPlace!:string;
  deliveryPincode!:string
  deliveryContact!:number
  paymentType!:string
  amount!:string;
  items: any[] = [];
  ReadOnlyFlag:boolean=true;
  vehicle_number!:string;
  ewaybill_number!:string;
  driver_id!:string;
  driver_name!:string;

  constructor(private deliveryservice:DeliveryserviceService)
  {


  }


  ngOnInit()
  {
    this.deliveryservice.getDeliveryData().pipe(take(1)).subscribe(
      (observables: Observable<any>[]) => {
  console.log("DEBUGG")
        observables.forEach((observable: Observable<any>, index: number) => {
          observable.pipe(take(1)).subscribe(
            (value: any) => {
              console.log(`Value from Observable ${index}:`, value);
            
              
this.items[index]=value;
            },
            (error) => {
              // Handle error
            }
          );
        });
      },
      (error) => {
        console.log("THERE IS A ERROR ")
      }
);


console.log(this.items[12])

this.lrNumber=this.items[0];
this.bookingDate=this.items[1];
this.bookingBranch=this.items[2];
this.bookingTime=this.items[3];
this.consignorName=this.items[4];
this.consigneeName=this.items[5];
this.deliveryEta=this.items[6];
this.deliveryType=this.items[7];
this.deliveryPlace=this.items[8];
this.deliveryPincode=this.items[9];
this.deliveryContact=this.items[10];
this.paymentType=this.items[11];
this.amount=this.items[12];


  }



  Delivery_Request(form:NgForm)
  {
  
  console.log(form.value)
  
  }



  }


