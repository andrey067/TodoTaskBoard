import { BaseDto } from "./BaseDto";
import { Cargo } from "./Cargo";

export interface Colaborador extends BaseDto {
  nome: string;
  telefone: string;
  situacao: boolean;  
  cargoId: number  
  link: string;
}
