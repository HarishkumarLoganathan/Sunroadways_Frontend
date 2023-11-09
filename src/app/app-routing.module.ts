import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponsComponent } from './coupons/coupons.component';
import {BookingComponent } from './booking/booking.component';
import { MediaComponent } from './media/media.component';
import { PagesComponent } from './pages/pages.component';
import { ProductsComponent } from './blind-manifest/products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { StatisticsComponent } from './statistics/statistics.component';
import{BlindManifestComponent} from './blind-manifest/blind-manifest.component'
import{PartialManifestComponent} from './partial-manifest/partial-manifest.component'
import{InboundComponent} from './inbound/inbound.component'
import{OutboundComponent} from './outbound/outbound.component'
import{VehicledetailsComponent} from './inbound/vehicledetails/vehicledetails.component'
import{ConsignmentDetailsComponent} from './inbound/consignment-details/consignment-details.component'
import{LocalTripsheetComponent}from './local-tripsheet/local-tripsheet.component'
import {DeliveryRequestComponent} from './inbound/delivery-request/delivery-request.component'
import{LineTripSheetComponent} from './line-trip-sheet/line-trip-sheet.component'
import {LoginComponent} from './login/login.component'
import {BranchsignupComponent} from './branchsignup/branchsignup.component'
import {BookingComponentBBComponent} from './booking-component-bb/booking-component-bb.component'

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path:'login',component:BranchsignupComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'coupens', component: CouponsComponent},
  {path: 'pages', component: PagesComponent},
  {path: 'media', component: MediaComponent},
  {path: 'settings', component: SettingsComponent},
  {path:'blindmanifest',component:BlindManifestComponent},
  {path:'partialmanifest',component:PartialManifestComponent},
  {path:'inbound',component:InboundComponent},
  {path:'outbound',component:OutboundComponent},
  {path:'localtripsheet',component:LocalTripsheetComponent},
  {path:'vehicledetails',component:VehicledetailsComponent},
  {path:'consignmentdetails',component:ConsignmentDetailsComponent},
  {path:'deliveryrequest',component:DeliveryRequestComponent},
  {path:'linetripsheet',component: LineTripSheetComponent},
  {path:'blindmanifest/BookingBlindManifest/:order_id',component: BookingComponentBBComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }