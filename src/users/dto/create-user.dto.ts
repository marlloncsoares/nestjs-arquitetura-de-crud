import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { User } from '../entities/user.entity';

export class CreateUserDto extends User {
  @IsEmail()
  email?: string;

  @IsString()
  @MinLength(3)
  @MaxLength(100)
  name: string;
}
