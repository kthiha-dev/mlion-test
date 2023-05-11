import { IsNotEmpty, IsInt, Min, Max, IsEnum } from 'class-validator';
import { Unit } from '../dimension.model';

export class CreateDimensionDto {
  @IsInt()
  @Min(1)
  @Max(1000)
  @IsNotEmpty()
  a4Width: number;

  @IsInt()
  @Min(1)
  @Max(1000)
  @IsNotEmpty()
  a4Height: number;

  @IsInt()
  @Min(1)
  @Max(1000)
  @IsNotEmpty()
  typeAWidth: number;

  @IsInt()
  @Min(1)
  @Max(1000)
  @IsNotEmpty()
  typeAHeight: number;

  @IsInt()
  @Min(1)
  @Max(1000)
  @IsNotEmpty()
  typeBWidth: number;

  @IsInt()
  @Min(1)
  @Max(1000)
  @IsNotEmpty()
  typeBHeight: number;

  @IsNotEmpty()
  @IsEnum(Unit)
  unit: Unit;
}
