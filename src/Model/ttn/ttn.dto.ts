export class CreateTTNDto {
  id: string;
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
