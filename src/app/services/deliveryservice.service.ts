import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { forkJoin, Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliveryserviceService {

  constructor() { }
  private Lr_Number=new BehaviorSubject<any>('');
  private Booking_Date = new BehaviorSubject<string>('');
  private Booking_Time = new BehaviorSubject<string>('');
  private Booking_Branch = new BehaviorSubject<string>('');
  private Consignor_Name = new BehaviorSubject<string>('');
  private Consignee_Name = new BehaviorSubject<string>('');
  private Delivery_Eta = new BehaviorSubject<string>('');
  private Delivery_Type = new BehaviorSubject<string>('');
  private Delivery_Place = new BehaviorSubject<string>('');
  private Delivery_Pincode=new BehaviorSubject<string>('')
  private Delivery_Contact = new BehaviorSubject<number>(0);
  private Payment_Type = new BehaviorSubject<string>('');
  private Amount=new BehaviorSubject<string>('');




  setDeliveryData(Lr_Number:any,Booking_Date:string,Booking_Branch:string,Booking_Time:string,Consignor_Name:string,Consignee_Name:string,Delivery_Eta:string,Delivery_Type:string,Delivery_Place:string,Delivery_Pincode:string,Delivery_Contact:number,Payment_Type:string,Amount:string) {
    this.Lr_Number.next(Lr_Number);
    this.Booking_Date.next(Booking_Date);
    this.Booking_Branch.next(Booking_Branch);
    this.Booking_Time.next(Booking_Time);
    this.Consignor_Name.next(Consignor_Name);
    this.Consignee_Name.next(Consignee_Name);
    this.Delivery_Eta.next(Delivery_Eta);
    this.Delivery_Type.next(Delivery_Type);
    this.Delivery_Place.next(Delivery_Place);
    this.Delivery_Pincode.next(Delivery_Pincode);
    this.Delivery_Contact.next(Delivery_Contact);
    this.Payment_Type.next(Payment_Type);
    this.Amount.next(Amount);

  }

  getDeliveryData(): Observable<any[]> 
  {
    const data:any[]= [ this.Lr_Number.asObservable(),
     this.Booking_Date.asObservable(),
     this.Booking_Branch.asObservable(),
     this.Booking_Time.asObservable(),
     this.Consignor_Name.asObservable(),
     this.Consignee_Name.asObservable(),
     this.Delivery_Eta.asObservable(),
     this.Delivery_Type.asObservable(),
     this.Delivery_Place.asObservable(),
     this.Delivery_Pincode.asObservable(),
     this.Delivery_Contact.asObservable(),
     this.Payment_Type.asObservable(),
     this.Amount.asObservable()
    ];



return of(data)

    
  }





}
