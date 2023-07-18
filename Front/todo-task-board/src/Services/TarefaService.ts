import { Result } from "@/types/Result";
import { Tarefa } from "@/types/Tarefa";

export default class TarefaService {
  private baseURL: string = "https://localhost:7170/api/Tarefa";

  constructor() {
    this.baseURL = this.baseURL;
  }

  private async tarefahandler<T>(
    url: string,
    method: string,
    data?: Tarefa
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

  async cadastrarTarefa(data: Tarefa): Promise<Result<Tarefa>> {
    const url = `${this.baseURL}`;

    try {
      return await this.tarefahandler(url, "POST", data);
    } catch (error) {
      throw new Error("Failed to register task.");
    }
  }

  async atualizarTarefa(data: Tarefa): Promise<Result<Tarefa>> {
    const url = `${this.baseURL}`;

    try {
      return await this.tarefahandler(url, "PUT", data);
    } catch (error) {
      throw new Error("Failed to update task.");
    }
  }

  async atualizarNomeTarefa(data: Tarefa): Promise<Result<Tarefa>> {
    const url = `${this.baseURL}`;

    try {
      return await this.tarefahandler(url, "PATH", data);
    } catch (error) {
      throw new Error("Failed to update task.");
    }
  }

  async obterTarefa(id: number): Promise<Result<Tarefa>> {
    const url = `${this.baseURL}/${id}`;

    try {
      return await this.tarefahandler(url, "GET");
    } catch (error) {
      throw new Error("Failed to get task.");
    }
  }

  async obterTodos(): Promise<Result<Tarefa[]>> {
    const url = `${this.baseURL}/obtertodos`;

    try {
      return await this.tarefahandler(url, "GET");
    } catch (error) {
      throw new Error("Failed to get task.");
    }
  }

  async obtertarefasEcards(): Promise<Result<Tarefa[]>> {
    const url = `${this.baseURL}/obtertarefas-cards`;

    try {
      return await this.tarefahandler(url, "GET");
    } catch (error) {
      throw new Error("Failed to get task.");
    }
  }

  async excluirTarefa(id: number): Promise<Result<Tarefa>> {
    const url = `${this.baseURL}?Id=${id}`;

    try {
      return await this.tarefahandler(url, "DELETE");
    } catch (error) {
      throw new Error("Failed to delete task.");
    }
  }
}
