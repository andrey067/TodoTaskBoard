import { Colaborador } from "@/types/Colaborador";
import { Result } from "@/types/Result";

export default class ColaboradorService {
  private baseURL: string = "https://localhost:7170/api/Colaborador";

  constructor() {
    this.baseURL = this.baseURL;
  }

  private async colaboradorHandler<T>(
    url: string,
    method: string,
    data?: Colaborador
  ): Promise<Result<T>> {
    try {
      const requestOptions: RequestInit = {
        method,
        headers: {
          "Content-Type": "application/json",
        },
      };

      if (data) {
        requestOptions.body = JSON.stringify(data);
      }

      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        throw new Error("Request failed.");
      }

      return await response.json();
    } catch (error) {
      throw new Error("Request failed.");
    }
  }

  async cadastrarColaborador(data: Colaborador): Promise<Result<Colaborador>> {
    const url = `${this.baseURL}`;

    try {
      return await this.colaboradorHandler(url, "POST", data);
    } catch (error) {
      throw new Error("Failed to register colaborador.");
    }
  }

  async atualizarColaborador(data: Colaborador): Promise<Result<Colaborador>> {
    const url = `${this.baseURL}`;

    try {
      return await this.colaboradorHandler(url, "PUT", data);
    } catch (error) {
      throw new Error("Failed to update colaborador.");
    }
  }

  async obterColaborador(id: number): Promise<Result<Colaborador>> {
    const url = `${this.baseURL}/obterporId?Id=${id}`;

    try {
      return await this.colaboradorHandler(url, "GET");
    } catch (error) {
      throw new Error("Failed to get colaborador.");
    }
  }

  async obterTodos(): Promise<Result<Colaborador[]>> {
    const url = `${this.baseURL}/obtertodos`;

    try {
      return await this.colaboradorHandler(url, "GET");
    } catch (error) {
      throw new Error("Failed to get colaboradores.");
    }
  }

  async excluirColaborador(id: number): Promise<Result<Colaborador>> {
    const url = `${this.baseURL}?Id=${id}`;

    try {
      return await this.colaboradorHandler(url, "DELETE");
    } catch (error) {
      throw new Error("Failed to delete colaborador.");
    }
  }
}
