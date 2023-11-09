import { Component,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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
  selector: 'app-vehicledetails',
  templateUrl: './vehicledetails.component.html',
  standalone:true,
  styleUrls: ['./vehicledetails.component.css'],
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
export class VehicledetailsComponent {
vechicleNumber!:string|null;
data!:string;
icon="fa-cloud-upload-alt";




ngOnInit()
{
  this.vehicleservice.getData().subscribe(data => {
    this.data = data;
    console.log (data)
  });


}


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

vechiledetails(Lr_Number:number|string){

console.log(Lr_Number);
this.vehicleservice.setLR(Lr_Number)
this.router.navigate(['/consignmentdetails']);

}


}
