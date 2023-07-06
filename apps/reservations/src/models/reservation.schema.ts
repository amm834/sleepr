import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDatabaseSchema } from '@app/common';

@Schema({ versionKey: false })
export class ReservationDocument extends AbstractDatabaseSchema {
  @Prop()
  timestamp: Date;

  @Prop()
  startDate: Date;

  @Prop()
  endDate: Date;

  @Prop()
  userId: string;

  @Prop()
  placeId: string;

  @Prop()
  invoiceId: string;
}

export const ReservationSchema =
  SchemaFactory.createForClass(ReservationDocument);
