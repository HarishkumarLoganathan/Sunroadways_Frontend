import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AsyncPipe, DecimalPipe, NgFor, NgIf } from '@angular/common';
import { FormsModule,FormControl } from '@angular/forms';
import { BrowserMultiFormatReader ,BarcodeFormat} from '@zxing/library';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdSortableHeader } from './blind-manifest/products/sortable.directive';
import { NgbdSortableHeader1 } from './blind-manifest/blind-manifest-boooking/sortable.directive';
import {CountryService} from './blind-manifest/products/country.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BookingComponent } from './booking/booking.component';
import { ProductsComponent } from './blind-manifest/products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CouponsComponent } from './coupons/coupons.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import { BlindManifestComponent } from './blind-manifest/blind-manifest.component';
import { BlindManifestBoookingComponent } from './blind-manifest/blind-manifest-boooking/blind-manifest-boooking.component';
import { PartialManifestComponent } from './partial-manifest/partial-manifest.component';
import { PartialManifestBookingComponent } from './partial-manifest/partial-manifest-booking/partial-manifest-booking.component';
import { PartialManifestRequestComponent } from './partial-manifest/partial-manifest-request/partial-manifest-request.component';
import { InboundComponent } from './inbound/inbound.component';
import { OutboundComponent } from './outbound/outbound.component';
import { LocalTripsheetComponent } from './local-tripsheet/local-tripsheet.component';
import { InboundlistComponent } from './inbound/inboundlist/inboundlist.component';
import { IncomingvehicleComponent } from './inbound/incomingvehicle/incomingvehicle.component';
import { VehicledetailComponent } from './vehicledetail/vehicledetail.component';
import { VehicledetailsComponent } from './inbound/vehicledetails/vehicledetails.component';
import { ConsignmentDetailsComponent } from './inbound/consignment-details/consignment-details.component';
import { DeliveryRequestComponent } from './inbound/delivery-request/delivery-request.component';
import { LineTripSheetComponent } from './line-trip-sheet/line-trip-sheet.component';
import { NewtripsheetComponent } from './outbound/newtripsheet/newtripsheet.component';
import { TripsheetlistComponent } from './outbound/tripsheetlist/tripsheetlist.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import {BranchsignupComponent} from './branchsignup/branchsignup.component';
import { BookingComponentBBComponent } from './booking-component-bb/booking-component-bb.component'


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    BookingComponent,
    
    StatisticsComponent,
    CouponsComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    BlindManifestComponent,
    PartialManifestComponent,
    InboundComponent,
    OutboundComponent,
    LocalTripsheetComponent,

    IncomingvehicleComponent,
    VehicledetailComponent,
    ConsignmentDetailsComponent,
    DeliveryRequestComponent,
    LineTripSheetComponent,
    NewtripsheetComponent,
    LoginComponent,
    BranchsignupComponent,
    
    
    
    
    
    
    
 
    
    
    
    
  ],
  imports: [
    BrowserModule,HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,FormsModule,NgbTypeaheadModule,NgbPaginationModule,NgbdSortableHeader,NgbdSortableHeader1,ProductsComponent,AsyncPipe, DecimalPipe,NgFor,NgIf,BlindManifestBoookingComponent,PartialManifestBookingComponent,VehicledetailsComponent,PartialManifestRequestComponent,InboundlistComponent,TripsheetlistComponent,BookingComponentBBComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }