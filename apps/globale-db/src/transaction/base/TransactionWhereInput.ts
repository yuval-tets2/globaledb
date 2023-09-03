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
import { AssetDescriptionListRelationFilter } from "../../assetDescription/base/AssetDescriptionListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { BlockTransactionListRelationFilter } from "../../blockTransaction/base/BlockTransactionListRelationFilter";
import { AssetListRelationFilter } from "../../asset/base/AssetListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { JsonFilter } from "../../util/JsonFilter";

@InputType()
class TransactionWhereInput {
  @ApiProperty({
    required: false,
    type: () => AssetDescriptionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AssetDescriptionListRelationFilter)
  @IsOptional()
  @Field(() => AssetDescriptionListRelationFilter, {
    nullable: true,
  })
  assetDescriptions?: AssetDescriptionListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => BlockTransactionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => BlockTransactionListRelationFilter)
  @IsOptional()
  @Field(() => BlockTransactionListRelationFilter, {
    nullable: true,
  })
  blocksTransactions?: BlockTransactionListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => AssetListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AssetListRelationFilter)
  @IsOptional()
  @Field(() => AssetListRelationFilter, {
    nullable: true,
  })
  createdAssets?: AssetListRelationFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  expiration?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: FloatFilter,
  })
  @Type(() => FloatFilter)
  @IsOptional()
  @Field(() => FloatFilter, {
    nullable: true,
  })
  fee?: FloatFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  hash?: StringFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  id?: IntFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  networkVersion?: IntFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  notes?: JsonFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  size?: IntFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  spends?: JsonFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter;
}

export { TransactionWhereInput as TransactionWhereInput };
