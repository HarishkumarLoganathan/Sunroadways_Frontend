import { Component } from '@angular/core';
import { AsyncPipe, DecimalPipe, NgFor, NgIf } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import {  Validators } from '@angular/forms';
import {  QueryList, ViewChildren } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ManifestBookingList } from './ManifestList';
import { ManifestService } from './ManifestBooking.service';
import { NgbdSortableHeader1, SortEvent } from './sortable.directive';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';





@Component({
	selector: 'app-blind-manifest-boooking',
	standalone:true,
	imports: [
		NgFor,
		DecimalPipe,
		FormsModule,
		AsyncPipe,
		NgbTypeaheadModule,
		NgbdSortableHeader1,
		NgbPaginationModule,
		NgIf,
	],

	templateUrl: './blind-manifest-boooking.component.html',
	styleUrls: ['./blind-manifest-boooking.component.css'],


providers: [ManifestService, DecimalPipe],
}
)


export class BlindManifestBoookingComponent {

	consigneecount_flag=false;
	consigneecount=0;
	orderref!:number;
	consginnment_count!:number;




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
	consignee_pincode!:number
	consignee_contact!:number
	consignor_name!:string
	consignor_gst!:string
	consignor_address!:string
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
	ploc = ["Chennai", "Bangalore", "Coimbatore"];

	Branches = {
	 'Chennai': ['Ambattur','Vellapanchavadi','Wall Tax Road'],
	 'Bangalore': ['Bommasandra','Chamarajpet','Peenya'],
	 'Coimbatore': ['Saravanmpatti','Sarasdfd'],
   
   };
   locations	 = {
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
   
   
   Branch_Booking()
   
   {
   
   
	 console.log("Sucess");
   }
   
   




  Bookings$: Observable<ManifestBookingList[]>;
	total$: Observable<number>;


	

	@ViewChildren(NgbdSortableHeader1) headers!: QueryList<NgbdSortableHeader1>;

	constructor(public service: ManifestService, private modalservices:NgbModal,private router:Router) {
		this.Bookings$ = service.Bookings$;
		this.total$ = service.total$;
	}

	onSort({ column, direction }: SortEvent) {
		// resetting other headers
		this.headers.forEach((header) => {
			console.log(header)
			if (header.sortable !== column) {
				header.direction = '';
			}
		});

		this.service.sortColumn = column;
		this.service.sortDirection = direction;
	}




	Booking_countModel(modal:any,order_id:number)
	{
		

console.log("UPDATING COUNT")
console.log(order_id)
this.consigneecount_flag=true
this.orderref=order_id


this.modalservices.open(modal,{ size: 'xl' })

	}
	

	updateconsigneecount()
	{

		console.log("UPDATED THE CONSINGEE COUNT")
		


	}
	updateconsigneeformcount(form:NgForm)
	{

		console.log("UPDATED THE CONSINGEE COUNT")
		console.log(form.value)


	}
	Add_consignment(modal:any,order_id:number,consignee_name:string)
	{
console.log("ORDER_ID")
		console.log(order_id)

		localStorage.setItem("order_id",order_id.toString())
		
		this.router.navigate([`/blindmanifest/BookingBlindManifest/${order_id}`]);

	}

}
