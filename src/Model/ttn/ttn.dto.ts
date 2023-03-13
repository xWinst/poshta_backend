export class CreateTTNDto {
  status: string;
  receivedDate: string;
  deliveryDate: string;
  recipientCity: string;
  senderCity: string;
  dispatchDate: string;
  isParcelDelivered: boolean;
  senderBranch: string;
  recipientBranch: string;
  senderBranchId: string;
  recipientBranchId: string;
}

export class UpdateTTNDto {
  receivedDate: string;
  deliveryDate: string;
  recipientCity: string;
  dispatchDate: string;
  isParcelDelivered: boolean;
  recipientBranch: string;
  recipientBranchId: string;
}
