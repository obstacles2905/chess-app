import { TransformPlainToClass } from "class-transformer";
import { MakeStepDTO } from "./dtos/make-step.dto";
import { CellDTO } from "./dtos/cell.dto";
import { FigureEnum } from "./figure.enum";
import { CellStateEnum } from "./cell.state.enum";

const CHESSBOARD_HEIGHT = 8;
const CHESSBOARD_WIDTH = 8;
const WHITE_FIGURES_ROWS_INDEX = 2;
const BLACK_FIGURES_ROWS_INDEX = 7;

export class ChessService {

  getChessboardData() {
    const chessboardData: CellDTO[] = [];

    for (let width = 1; width <= CHESSBOARD_WIDTH; width++) {
      for (let height = 1; height <= CHESSBOARD_HEIGHT; height++) {
        if (width <= WHITE_FIGURES_ROWS_INDEX
          || width >= BLACK_FIGURES_ROWS_INDEX) {
          chessboardData.push({
            x: width,
            y: height,
            figure: FigureEnum.Pawn,
            cellState: CellStateEnum.Filled,
          });
        } else {
          chessboardData.push({
            x: width,
            y: height,
            cellState: CellStateEnum.Empty,
          });
        }
      }
    }

    return chessboardData;
  }

  @TransformPlainToClass(MakeStepDTO)
  makeStep(makeStepDTO: MakeStepDTO): boolean {
    const {actualStep, expectedStep} = makeStepDTO;

    return actualStep.x === expectedStep.x &&
      expectedStep.y - actualStep.y === 1;
  }
}
