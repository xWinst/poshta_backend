import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TTNDocument = HydratedDocument<TTN>;

@Schema()
export class TTN {
  @Prop({ unique: true })
  id: string;

  @Prop()
  status: string;

  @Prop()
  receivedDate: string;

  @Prop()
  deliveryDate: string;

  @Prop()
  recipientCity: string;

  @Prop()
  senderCity: string;

  @Prop()
  dispatchDate: string;

  @Prop()
  isParcelDelivered: boolean;

  @Prop()
  senderBranch: string;

  @Prop()
  recipientBranch: string;

  @Prop()
  senderBranchId: string;

  @Prop()
  recipientBranchId: string;
}

export const TTNSchema = SchemaFactory.createForClass(TTN);
