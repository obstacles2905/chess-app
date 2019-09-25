import { FigureEnum } from "../figure.enum";
import { IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { StepDTO } from "./step.dto";

export class MakeStepDTO {

  @IsEnum(FigureEnum)
  readonly figure: FigureEnum;

  @Type(() => StepDTO)
  readonly actualStep: StepDTO;

  @Type(() => StepDTO)
  readonly expectedStep: StepDTO;
}
