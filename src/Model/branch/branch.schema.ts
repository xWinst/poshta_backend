import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BranchDocument = HydratedDocument<Branch>;

@Schema()
export class Branch {
  @Prop()
  id: string;

  @Prop()
  city: string;

  @Prop()
  name: string;

  @Prop()
  adress: string;

  @Prop()
  type: string;

  @Prop()
  phone: string;

  @Prop()
  maxWeight: number;

  @Prop()
  maxDimensions: string;

  @Prop()
  longitude: number;

  @Prop()
  latitude: number;

  @Prop()
  hasPostFinance: boolean;

  @Prop()
  hasBicycleParking: boolean;

  @Prop()
  hasPOSTerminal: boolean;

  @Prop()
  hasInternational: boolean;

  @Prop()
  hasSelfWorkplaces: boolean;

  @Prop()
  canGetMoneyTransfer: boolean;

  @Prop()
  hasGeneratorEnabled: boolean;

  @Prop(
    raw({
      Monday: { type: String },
      Tuesday: { type: String },
      Wednesday: { type: String },
      Thursday: { type: String },
      Friday: { type: String },
      Saturday: { type: String },
      Sunday: { type: String },
    }),
  )
  schedule: Record<string, any>;

  @Prop()
  isShow: boolean;
}

export const BranchSchema = SchemaFactory.createForClass(Branch);
