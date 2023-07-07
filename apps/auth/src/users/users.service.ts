import { Injectable } from '@nestjs/common';
import { UserRepository } from './repositories';
import { CreateUserDto, UpdateUserDto } from './dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UserRepository) {}

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.create(createUserDto);
  }

  update(_id: string, updateUserDto: UpdateUserDto) {
    return this.usersRepository.findOneAndUpdate({ _id }, updateUserDto);
  }

  remove(_id: string) {
    return this.usersRepository.findOneAndDelete({ _id });
  }
}
