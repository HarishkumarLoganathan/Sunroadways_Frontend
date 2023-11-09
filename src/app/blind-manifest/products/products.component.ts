import { AsyncPipe, DecimalPipe, NgFor, NgIf } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbModal ,NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { Country } from './country';
import { CountryService } from './country.service';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';
import { FormsModule, NgForm } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';



@Component({
	selector: 'app-products',
	standalone:true,
	imports: [
		NgFor,
		DecimalPipe,
		FormsModule,
		AsyncPipe,
		NgbTypeaheadModule,
		NgbdSortableHeader,
		NgbPaginationModule,
		NgIf,
	],

	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css'],


providers: [CountryService, DecimalPipe],
}
)
export class ProductsComponent {


	
	orderref!:number;
	consignee_name!:string;
	consignment_weight!:number;
	Vehicle_Number!:string;
	Driver_Id!:number;
	Driver_Name!:string;
	Readonly_Flag:boolean=true;




	countries$: Observable<Country[]>;
	total$: Observable<number>;


	

	@ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;

	constructor(public service: CountryService,private modalservices:NgbModal,) {
		this.countries$ = service.countries$;
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




	Assign_vehicle(modal:any,order_id:number,consignee_name:string,consignment_weight:number)
	{
		



console.log("UPDATING COUNT")
console.log(order_id)
this.orderref=order_id
this.consignee_name=consignee_name
this.consignment_weight=consignment_weight


this.modalservices.open(modal,{ size: 'xl' })

	}

	View_vehicle(modal:any,order_id:number,consignee_name:string,consignment_weight:number)
	{

		console.log("View Modal")
		console.log(order_id)
		this.orderref=order_id
		this.consignee_name=consignee_name
		this.consignment_weight=consignment_weight
		this.Vehicle_Number="TN05BT9501"
		this.Driver_Id=576232;
		this.Driver_Name="SHANMUGAM"
		this.Readonly_Flag=true;
		this.modalservices.open(modal,{ size: 'xl' })

	}

	assgin_vehicle(form:NgForm)
	{
console.log(form.value)



	}
	Modify_vehicle(form:NgForm)
	{

console.log(form.value)
this.Vehicle_Number=""
		this.Driver_Id=0;
		this.Driver_Name=""
this.Readonly_Flag=false;
	}

	Update_vehicle(form:NgForm)
	{

		
		console.log(form.value)


	}

}