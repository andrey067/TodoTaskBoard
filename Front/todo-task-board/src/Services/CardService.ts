import { Result } from "@/types/Result";
import { Card } from "@/types/Card";

export default class CardService {
  private baseURL: string = "https://localhost:7170/api/Card";

  constructor() {
    this.baseURL = this.baseURL;
  }

  private async cardHandler<T>(
    url: string,
    method: string,
    data?: Card
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

  async cadastrarCard(data: Card): Promise<Result<Card>> {
    const url = `${this.baseURL}`;

    try {
      return await this.cardHandler(url, "POST", data);
    } catch (error) {
      throw new Error("Failed to register card.");
    }
  }

  async atualizarCard(data: Card): Promise<Result<Card>> {
    const url = `${this.baseURL}`;

    try {
      return await this.cardHandler(url, "PUT", data);
    } catch (error) {
      throw new Error("Failed to update card.");
    }
  }

  async obterCard(id: number): Promise<Result<Card>> {
    const url = `${this.baseURL}/${id}`;

    try {
      return await this.cardHandler(url, "GET");
    } catch (error) {
      throw new Error("Failed to get card.");
    }
  }

  async obterTodos(): Promise<Result<Card[]>> {
    const url = `${this.baseURL}/obtertodos`;

    try {
      return await this.cardHandler(url, "GET");
    } catch (error) {
      throw new Error("Failed to get cards.");
    }
  }

  async excluirCard(id: number): Promise<Result<Card>> {
    const url = `${this.baseURL}/${id}`;

    try {
      return await this.cardHandler(url, "DELETE");
    } catch (error) {
      throw new Error("Failed to delete card.");
    }
  }
}
