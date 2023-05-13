export interface Dimension {
  paperWidth: number;
  paperHeight: number;
  typeAWidth: number;
  typeAHeight: number;
  typeBWidth: number;
  typeBHeight: number;
  unit: Unit;
  numberOfTypeANote?: string;
  numberOfTypeBNote?: string;
}

export enum Unit {
  MILLIMETERS = 'mm',
  INCHES = 'inches',
}
