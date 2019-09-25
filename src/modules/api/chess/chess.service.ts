import { TransformPlainToClass } from "class-transformer";
import { MakeStepDTO } from "./dtos/make-step.dto";
import { CellDTO } from "./dtos/cell.dto";

const CHESSBOARD_HEIGHT = 8;
const CHESSBOARD_WIDTH = 8;
const WHITE_FIGURES_AMOUNT = 16;
const BLACK_FIGURE_AMOUNT = 16;
const PAWN_HTML_CODE = "&#9823;";

export class ChessService {

  getChessboardData() {
    const chessboardData: CellDTO[] = [];

    for (let width = 1; width <= CHESSBOARD_WIDTH; width++) {
      for (let height = 1; height <= CHESSBOARD_HEIGHT; height++) {
        chessboardData.push({ x: width, y: height});
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
