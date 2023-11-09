
export interface ManifestBookingList {
	id: number;
	Order_Ref_Id:number;
	Consignor_name: string;
	DeliveryCity: string;
	Weight: number;
	Article:number;
	Contact:number;
	PickupTruck:string;
	Total_Consignment:number;
    Pickup_status:string;
}