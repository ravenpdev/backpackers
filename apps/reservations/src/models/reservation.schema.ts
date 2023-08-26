import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class ReservationDocument extends AbstractDocument {
  @Prop()
  timestamp: Date;
  @Prop()
  startDate: Date;
  @Prop()
  endDate: Date;
  @Prop()
  userId: string;
  @Prop()
  placeId: string; // another microservice for places
  @Prop()
  invoiceId: string; // another microservice for billing
}

export const ReservationSchema =
  SchemaFactory.createForClass(ReservationDocument);