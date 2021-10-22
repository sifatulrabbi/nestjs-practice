import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'get all items';
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `Item: ${id}`;
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name}; Desc: ${createItemDto.description}; Quantity: ${createItemDto.quantity}`;
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
    return `${id} has been updated; Name: ${updateItemDto.name}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `${id} has been deleted`;
  }
}
