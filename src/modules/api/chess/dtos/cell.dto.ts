import { FigureEnum } from "../figure.enum";

export class CellDTO {

  readonly x: number;

  readonly y: number;

  readonly figure?: FigureEnum;
}
