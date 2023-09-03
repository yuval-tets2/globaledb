/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BlockTransactionWhereInput } from "./BlockTransactionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BlockTransactionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => BlockTransactionWhereInput,
  })
  @ValidateNested()
  @Type(() => BlockTransactionWhereInput)
  @IsOptional()
  @Field(() => BlockTransactionWhereInput, {
    nullable: true,
  })
  every?: BlockTransactionWhereInput;

  @ApiProperty({
    required: false,
    type: () => BlockTransactionWhereInput,
  })
  @ValidateNested()
  @Type(() => BlockTransactionWhereInput)
  @IsOptional()
  @Field(() => BlockTransactionWhereInput, {
    nullable: true,
  })
  some?: BlockTransactionWhereInput;

  @ApiProperty({
    required: false,
    type: () => BlockTransactionWhereInput,
  })
  @ValidateNested()
  @Type(() => BlockTransactionWhereInput)
  @IsOptional()
  @Field(() => BlockTransactionWhereInput, {
    nullable: true,
  })
  none?: BlockTransactionWhereInput;
}
export { BlockTransactionListRelationFilter as BlockTransactionListRelationFilter };