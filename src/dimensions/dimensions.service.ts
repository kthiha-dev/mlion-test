import { Injectable } from '@nestjs/common';
import { Dimension, Unit } from './dimension.model';
import { CreateDimensionDto } from './dto/create-dimension.dto';

@Injectable()
export class DimensionsService {
  private dimensions: Dimension[] = [];
  constructor() {
    // Initialize the dimensions array with default values
    this.dimensions = [
      {
        a4Width: 210,
        a4Height: 297,
        typeAWidth: 76,
        typeAHeight: 76,
        typeBWidth: 38,
        typeBHeight: 51,
        unit: Unit.MILLIMETERS,
      },
    ];
  }

  // take default dimensions value if empty
  calculatePostItNotes(): Dimension[] {
    return this.dimensions.map((dimension) => {
      const {
        a4Width,
        a4Height,
        typeAWidth,
        typeAHeight,
        typeBWidth,
        typeBHeight,
      } = dimension;

      // Calculate max number of Type-A and Type-B post-it notes that can be cut from A4 size paper
      const maxTypeWidth = Math.floor(a4Width / typeAWidth);
      const maxTypeAHeight = Math.floor(a4Height / typeAHeight);
      const maxTypeBWidth = Math.floor(a4Width / typeBWidth);
      const maxTypeBHeight = Math.floor(a4Height / typeBHeight);

      // output
      return {
        ...dimension,
        numberOfTypeANote: `${maxTypeWidth * maxTypeAHeight} pieces`,
        numberOfTypeBNote: `${maxTypeBWidth * maxTypeBHeight} pieces`,
      };
    });
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
    // pushing new dimension
    this.dimensions.push(dimension);
    return dimension;
  }
}
