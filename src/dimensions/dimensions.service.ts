import { Injectable } from '@nestjs/common';
import { Dimension } from './dimension.model';
import { CreateDimensionDto } from './dto/create-dimension.dto';

@Injectable()
export class DimensionsService {
  private dimensions: Dimension[] = [];

  calcuate(): Dimension[] {
    return this.dimensions;
  }

  update(createDimensionDto: CreateDimensionDto): Dimension {
    const {
      a4Width,
      a4Height,
      typeAWidth,
      typeAHeight,
      typeBWidth,
      typeBHeight,
      unit,
    } = createDimensionDto;
    const dimension: Dimension = {
      a4Width,
      a4Height,
      typeAWidth,
      typeAHeight,
      typeBWidth,
      typeBHeight,
      unit,
    };
    this.dimensions.push(dimension);
    return dimension;
  }
}
