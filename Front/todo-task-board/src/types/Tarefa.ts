import { BaseDto } from "./BaseDto";
import { Card } from "./Card";

export interface Tarefa extends BaseDto {
  nome: string;  
  cards: Card[];
}