import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDatabaseSchema } from '@app/common';

@Schema({ versionKey: false })
export class UserDocument extends AbstractDatabaseSchema {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(UserDocument);
