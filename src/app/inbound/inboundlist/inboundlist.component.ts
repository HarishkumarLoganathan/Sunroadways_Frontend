import { Component,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {VehicledetailsComponent} from '../vehicledetails/vehicledetails.component'
import { VehicleInterface } from './VehiclelistInterface';
import { UpcomingVechile } from './UpcomingVehicle_list';
import {  QueryList, ViewChildren } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { NgbdSortableHeader1, SortEvent } from './sortable.directive';
import { ManifestService} from './Upcomingvehicle.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { AsyncPipe, DecimalPipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { VehicleinfoService } from '../../services/vehicleinfo.service';



@Component({
  selector: 'app-inboundlist',
  templateUrl: './inboundlist.component.html',
  standalone:true,
  styleUrls: ['./inboundlist.component.css'],
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
  providers: [ManifestService,DecimalPipe]
})
export class InboundlistComponent {
  
  icon="fa-cloud-upload-alt"
  veh_num!:string;
  parentData="Hello"


  IncomingVehicleList$: Observable<VehicleInterface[]>;
  total$: Observable<number>;


	

	@ViewChildren(NgbdSortableHeader1) headers!: QueryList<NgbdSortableHeader1>;

	constructor(public service: ManifestService, private modalservices:NgbModal,private router:Router,private vehicleservice:VehicleinfoService) {
		this.IncomingVehicleList$ = service.IncomingVehicleList$;
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

 
 

  vechiledetails(vechicleNumber:string)
  {
this.router.navigate(['/vehicledetails'])
this.veh_num=vechicleNumber
this.vehicleservice.setData(vechicleNumber)


  }

}
