import { Body, Controller, Get, Post, Render } from "@nestjs/common";
import { MakeStepDTO } from "./dtos/make-step.dto";
import { ChessService } from "./chess.service";

@Controller("chess")
export class ChessController {
  constructor(
    private readonly chessService: ChessService,
  ) {}

  @Get()
  @Render("index.ejs")
  renderGame() {
    const chessboardData = this.chessService.getChessboardData();

    return {chessboardData};
  }

  @Post()
  makeStep(@Body() makeStepDTO: MakeStepDTO): boolean {
    return this.chessService.makeStep(makeStepDTO);
  }
}
