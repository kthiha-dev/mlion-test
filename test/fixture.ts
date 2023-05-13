import { CreateDimensionDto } from 'src/dimensions/dto/create-dimension.dto';
import { Dimension, Unit } from '../src/dimensions/dimension.model';

export function fixtureDimension(): CreateDimensionDto {
  return {
    a4Width: 210,
    a4Height: 297,
    typeAWidth: 76,
    typeAHeight: 76,
    typeBWidth: 38,
    typeBHeight: 51,
    unit: Unit.MILLIMETERS,
  };
}

export function mockResponse(): Dimension {
  return {
    a4Width: 210,
    a4Height: 297,
    typeAWidth: 76,
    typeAHeight: 76,
    typeBWidth: 38,
    typeBHeight: 51,
    unit: Unit.MILLIMETERS,
  };
}

export function mockResponseWithNotes(): Dimension[] {
  return [
    {
      a4Width: 210,
      a4Height: 297,
      typeAWidth: 76,
      typeAHeight: 76,
      typeBWidth: 38,
      typeBHeight: 51,
      unit: Unit.MILLIMETERS,
      numberOfTypeANote: '6 pieces',
      numberOfTypeBNote: '25 pieces',
    },
  ];
}
