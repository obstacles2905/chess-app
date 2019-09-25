import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "figure"})
export class FigureEntity {

  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({type: "character varying"})
  readonly name: string;

  @Column({type: "int"})
  readonly stepMaxSize: number;
}
