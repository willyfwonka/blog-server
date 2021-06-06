import { Field, InputType } from '@nestjs/graphql';
import { Length } from 'class-validator';
import { IsPassword } from 'src/module/shared/decorator/is-password';
import { Match } from 'src/module/shared/decorator/match';
import { IsUsername } from 'src/module/shared/decorator/is-username';

@InputType()
export class CreateUser {
  @Field()
  @IsUsername()
  username: string;

  @Field()
  @Length(3, 60)
  fullName: string;

  @Field()
  @IsPassword()
  password: string;

  @Field()
  @IsPassword()
  @Match('password')
  confirmPassword: string;
}
