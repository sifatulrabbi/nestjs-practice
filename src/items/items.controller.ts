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
import { ItemsService } from './items.service';
import { IItem } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Promise<IItem[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<IItem> {
    return this.itemsService.findOne(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<IItem> {
    return this.itemsService.create(createItemDto);
  }

  @Put(':id')
  update(
    @Body() updateItemDto: CreateItemDto,
    @Param('id') id,
  ): Promise<IItem> {
    return this.itemsService.update(id, updateItemDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<IItem> {
    return this.itemsService.delete(id);
  }
}
