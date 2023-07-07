import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AbstractDatabaseRepository } from '@app/common';
import { UserDocument } from '../models';
import { Model } from 'mongoose';

@Injectable()
export class UserRepository extends AbstractDatabaseRepository<UserDocument> {
  protected readonly logger: Logger = new Logger(UserRepository.name);

  constructor(
    @InjectModel(UserDocument.name) private userModel: Model<UserDocument>,
  ) {
    super(userModel);
  }
}
