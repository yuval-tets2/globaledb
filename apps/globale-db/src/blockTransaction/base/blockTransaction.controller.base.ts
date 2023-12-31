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
import { BlockTransactionService } from "../blockTransaction.service";
import { BlockTransactionCreateInput } from "./BlockTransactionCreateInput";
import { BlockTransactionWhereInput } from "./BlockTransactionWhereInput";
import { BlockTransactionWhereUniqueInput } from "./BlockTransactionWhereUniqueInput";
import { BlockTransactionFindManyArgs } from "./BlockTransactionFindManyArgs";
import { BlockTransactionUpdateInput } from "./BlockTransactionUpdateInput";
import { BlockTransaction } from "./BlockTransaction";

export class BlockTransactionControllerBase {
  constructor(protected readonly service: BlockTransactionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: BlockTransaction })
  async create(
    @common.Body() data: BlockTransactionCreateInput
  ): Promise<BlockTransaction> {
    return await this.service.create({
      data: {
        ...data,

        block: {
          connect: data.block,
        },

        transaction: {
          connect: data.transaction,
        },
      },
      select: {
        block: {
          select: {
            id: true,
          },
        },

        id: true,
        index: true,

        transaction: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [BlockTransaction] })
  @ApiNestedQuery(BlockTransactionFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<BlockTransaction[]> {
    const args = plainToClass(BlockTransactionFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        block: {
          select: {
            id: true,
          },
        },

        id: true,
        index: true,

        transaction: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: BlockTransaction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: BlockTransactionWhereUniqueInput
  ): Promise<BlockTransaction | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        block: {
          select: {
            id: true,
          },
        },

        id: true,
        index: true,

        transaction: {
          select: {
            id: true,
          },
        },
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
  @swagger.ApiOkResponse({ type: BlockTransaction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: BlockTransactionWhereUniqueInput,
    @common.Body() data: BlockTransactionUpdateInput
  ): Promise<BlockTransaction | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          block: {
            connect: data.block,
          },

          transaction: {
            connect: data.transaction,
          },
        },
        select: {
          block: {
            select: {
              id: true,
            },
          },

          id: true,
          index: true,

          transaction: {
            select: {
              id: true,
            },
          },
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
  @swagger.ApiOkResponse({ type: BlockTransaction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: BlockTransactionWhereUniqueInput
  ): Promise<BlockTransaction | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          block: {
            select: {
              id: true,
            },
          },

          id: true,
          index: true,

          transaction: {
            select: {
              id: true,
            },
          },
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
}
