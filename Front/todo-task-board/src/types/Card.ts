import { BaseDto } from "./BaseDto";

export interface Card extends BaseDto {
  nome: string;
  posicao: number;
  cor: string;
  atividade: string;
}
