import { Body, Controller, Get, Post } from '@nestjs/common';
import { Dimension } from './dimension.model';
import { DimensionsService } from './dimensions.service';
import { CreateDimensionDto } from './dto/create-dimension.dto';
@Controller('dimensions')
export class DimensionsController {
  constructor(private readonly dimensionsService: DimensionsService) {
    this.dimensionsService = dimensionsService;
  }

  @Get()
  calculate(): Dimension[] {
    return this.dimensionsService.calculatePostItNotes();
  }

  @Post()
  updateDimensions(@Body() createDimensionDto: CreateDimensionDto): Dimension {
    return this.dimensionsService.update(createDimensionDto);
  }
}
