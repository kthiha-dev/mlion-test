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
        paperWidth: 210,
        paperHeight: 297,
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
        paperWidth,
        paperHeight,
        typeAWidth,
        typeAHeight,
        typeBWidth,
        typeBHeight,
      } = dimension;

      // Calculate max number of Type-A and Type-B post-it notes that can be cut from A4 size paper
      const maxTypeWidth = Math.floor(paperWidth / typeAWidth);
      const maxTypeAHeight = Math.floor(paperHeight / typeAHeight);
      const maxTypeBWidth = Math.floor(paperWidth / typeBWidth);
      const maxTypeBHeight = Math.floor(paperHeight / typeBHeight);

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
      paperWidth,
      paperHeight,
      typeAWidth,
      typeAHeight,
      typeBWidth,
      typeBHeight,
      unit,
    } = createDimensionDto;
    const dimension: Dimension = {
      paperWidth,
      paperHeight,
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
