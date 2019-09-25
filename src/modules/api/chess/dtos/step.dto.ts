import { IsNumber } from "class-validator";

export class StepDTO {
  @IsNumber()
  readonly x: number;

  @IsNumber()
  readonly y: number;
}