
export interface ManifestBookingList {
    id:number;
	LR_Number: number;
	Order_Ref_Id:number;
	Consignee_name: string;
    Consignor_name: string;
	DeliveryCity: string;
	DeliveryArea:string
	DeliveryPincode:number
	Article:number
	Weight: number;
    Contact:number;
    Pickup_status:string;
}