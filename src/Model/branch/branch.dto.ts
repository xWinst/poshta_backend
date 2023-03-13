export class CreateBranchDto {
  id: string;
  city: string;
  name: string;
  adress: string;
  type: string;
  phone: string;
  maxWeight: number;
  maxDimensions: string;
  longitude: number;
  latitude: number;
  hasPostFinance: boolean;
  hasBicycleParking: boolean;
  hasPOSTerminal: boolean;
  hasInternational: boolean;
  hasSelfWorkplaces: boolean;
  canGetMoneyTransfer: boolean;
  hasGeneratorEnabled: boolean;
  schedule: {
    Monday: string;
    Tuesday: string;
    Wednesday: string;
    Thursday: string;
    Friday: string;
    Saturday: string;
    Sunday: string;
  };
  isShow: boolean;
}
