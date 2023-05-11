export interface Dimension {
  a4Width: number;
  a4Height: number;
  typeAWidth: number;
  typeAHeight: number;
  typeBWidth: number;
  typeBHeight: number;
  numberOfTypeANote?: number;
  numberOfTypeBNote?: number;
  unit: Unit;
}

export enum Unit {
  MILLIMETERS = 'mm',
  INCHES = 'inches',
}
