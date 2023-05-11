import { Body, Controller, Get, Post } from '@nestjs/common';
import { Dimension } from './dimension.model';
import { DimensionsService } from './dimensions.service';
import { CreateDimensionDto } from './dto/create-dimension.dto';
@Controller('dimensions')
export class DimensionsController {
  constructor(private readonly dimensionService: DimensionsService) {
    this.dimensionService = dimensionService;
  }

  @Get()
  calculate(): Dimension[] {
    return this.dimensionService.calculatePostItNotes();
  }

  @Post()
  updateDimensions(@Body() createDimensionDto: CreateDimensionDto): Dimension {
    return this.dimensionService.update(createDimensionDto);
  }
}
