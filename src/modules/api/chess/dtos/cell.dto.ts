import { FigureEnum } from "../figure.enum";
import { CellStateEnum } from "../cell.state.enum";

export class CellDTO {

  readonly x: number;

  readonly y: number;

  readonly figure?: FigureEnum;

  readonly cellState: CellStateEnum;
}
