/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { AssetService } from "../asset.service";
import { AssetCreateInput } from "./AssetCreateInput";
import { AssetWhereInput } from "./AssetWhereInput";
import { AssetWhereUniqueInput } from "./AssetWhereUniqueInput";
import { AssetFindManyArgs } from "./AssetFindManyArgs";
import { AssetUpdateInput } from "./AssetUpdateInput";
import { Asset } from "./Asset";
import { AssetDescriptionFindManyArgs } from "../../assetDescription/base/AssetDescriptionFindManyArgs";
import { AssetDescription } from "../../assetDescription/base/AssetDescription";
import { AssetDescriptionWhereUniqueInput } from "../../assetDescription/base/AssetDescriptionWhereUniqueInput";

export class AssetControllerBase {
  constructor(protected readonly service: AssetService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Asset })
  async create(@common.Body() data: AssetCreateInput): Promise<Asset> {
    return await this.service.create({
      data: {
        ...data,

        createdTransaction: {
          connect: data.createdTransaction,
        },
      },
      select: {
        createdAt: true,

        createdTransaction: {
          select: {
            id: true,
          },
        },

        id: true,
        identifier: true,
        metadata: true,
        name: true,
        owner: true,
        supply: true,
        updatedAt: true,
        verifiedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Asset] })
  @ApiNestedQuery(AssetFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Asset[]> {
    const args = plainToClass(AssetFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,

        createdTransaction: {
          select: {
            id: true,
          },
        },

        id: true,
        identifier: true,
        metadata: true,
        name: true,
        owner: true,
        supply: true,
        updatedAt: true,
        verifiedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Asset })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: AssetWhereUniqueInput
  ): Promise<Asset | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,

        createdTransaction: {
          select: {
            id: true,
          },
        },

        id: true,
        identifier: true,
        metadata: true,
        name: true,
        owner: true,
        supply: true,
        updatedAt: true,
        verifiedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Asset })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: AssetWhereUniqueInput,
    @common.Body() data: AssetUpdateInput
  ): Promise<Asset | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          createdTransaction: {
            connect: data.createdTransaction,
          },
        },
        select: {
          createdAt: true,

          createdTransaction: {
            select: {
              id: true,
            },
          },

          id: true,
          identifier: true,
          metadata: true,
          name: true,
          owner: true,
          supply: true,
          updatedAt: true,
          verifiedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Asset })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: AssetWhereUniqueInput
  ): Promise<Asset | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,

          createdTransaction: {
            select: {
              id: true,
            },
          },

          id: true,
          identifier: true,
          metadata: true,
          name: true,
          owner: true,
          supply: true,
          updatedAt: true,
          verifiedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/descriptions")
  @ApiNestedQuery(AssetDescriptionFindManyArgs)
  async findManyDescriptions(
    @common.Req() request: Request,
    @common.Param() params: AssetWhereUniqueInput
  ): Promise<AssetDescription[]> {
    const query = plainToClass(AssetDescriptionFindManyArgs, request.query);
    const results = await this.service.findDescriptions(params.id, {
      ...query,
      select: {
        asset: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        transaction: {
          select: {
            id: true,
          },
        },

        type: true,
        updatedAt: true,
        value: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/descriptions")
  async connectDescriptions(
    @common.Param() params: AssetWhereUniqueInput,
    @common.Body() body: AssetDescriptionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      descriptions: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/descriptions")
  async updateDescriptions(
    @common.Param() params: AssetWhereUniqueInput,
    @common.Body() body: AssetDescriptionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      descriptions: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/descriptions")
  async disconnectDescriptions(
    @common.Param() params: AssetWhereUniqueInput,
    @common.Body() body: AssetDescriptionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      descriptions: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}