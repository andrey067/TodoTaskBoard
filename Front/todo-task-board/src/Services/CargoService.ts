import { Cargo } from "@/types/Cargo";
import { Result } from "@/types/Result";

export default class CargoService {
  private baseURL: string = "https://localhost:7170/api/Cargo";

  constructor() {
    this.baseURL = this.baseURL;
  }

  private async cargoHandler<T>(
    url: string,
    method: string,
    data?: Cargo
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

  async cadastrarCargo(data: Cargo): Promise<Result<Cargo>> {
    const url = `${this.baseURL}`;

    try {
      return await this.cargoHandler(url, "POST", data);
    } catch (error) {
      throw new Error("Failed to register cargo.");
    }
  }

  async atualizarCargo(data: Cargo): Promise<void> {
    const url = `${this.baseURL}/${data.id}`;

    try {
      await this.cargoHandler(url, "PUT", data);
    } catch (error) {
      throw new Error("Failed to update cargo.");
    }
  }

  async obterCargo(id: number): Promise<Result<Cargo>> {
    const url = `${this.baseURL}/${id}`;

    try {
      return await this.cargoHandler(url, "GET");
    } catch (error) {
      throw new Error("Failed to get cargo.");
    }
  }

  async obterTodos(): Promise<Result<Cargo[]>> {
    const url = `${this.baseURL}/obtertodos`;

    try {
      return await this.cargoHandler(url, "GET");
    } catch (error) {
      throw new Error("Failed to get cargos.");
    }
  }

  async excluirCargo(id: number): Promise<void> {
    const url = `${this.baseURL}/${id}`;

    try {
      await this.cargoHandler(url, "DELETE");
    } catch (error) {
      throw new Error("Failed to delete cargo.");
    }
  }
}