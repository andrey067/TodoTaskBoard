import { BaseDto } from "./BaseDto";

export interface Cargo extends BaseDto {
    nome: string;
    descricao: string;
    situacao: boolean;
}