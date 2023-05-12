import { IsInt, IsNotEmpty, IsEnum, Min } from 'class-validator';
import { Unit } from '../dimension.model';

export class CreateDimensionDto {
  @IsInt()
  @IsNotEmpty()
  a4Width: number;

  @IsInt()
  @IsNotEmpty()
  a4Height: number;

  @IsInt()
  @IsNotEmpty()
  typeAWidth: number;

  @IsInt()
  @IsNotEmpty()
  typeAHeight: number;

  @IsInt()
  @IsNotEmpty()
  typeBWidth: number;

  @IsInt()
  @IsNotEmpty()
  typeBHeight: number;

  @IsNotEmpty()
  @IsEnum(Unit)
  unit: Unit;

  // optional values for result of A-Notes and B-Notes
  numberOfTypeANote?: string;
  numberOfTypeBNote?: string;
}
