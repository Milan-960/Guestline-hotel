interface Occupancy {
  maxAdults: number;
  maxChildren: number;
  maxOverall: number;
}

interface CancellationPolicy {
  name: string;
  text: string;
  penalty: string;
  applicable: string;
  amount: number;
  hour: string;
  days: number;
}

interface RatePlan {
  id: string;
  shortDescription: string;
  longDescription?: string;
  prePayment: string;
  cancellationPolicy?: CancellationPolicy;
  prePaymentValue?: number;
  prePaymentIsPercentage?: boolean;
}

export interface Room {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  occupancy: Occupancy;
  disabledAccess: boolean;
  bedConfiguration: string;
  // images: Image[];
  // facilities: Facility[];
}

export default interface HotelDetails {
  rooms: Room[];
  ratePlans: RatePlan[];
}
