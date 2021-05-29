import { Field, InputType } from '@nestjs/graphql';
import { Trim } from 'src/module/decorator/trim';
import { IsArray, IsObject, IsOptional, Length } from 'class-validator';
import { RefInput } from 'src/module/shared/input/ref-input';
import { Category } from 'src/module/category/model/category';

@InputType()
export class CreatePost {
  @Field()
  @Length(3, 255)
  @Trim()
  title: string;

  @Field()
  @Trim()
  content: string;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  sources: string[];

  @Field(() => RefInput)
  @IsObject()
  category: Category;
}
