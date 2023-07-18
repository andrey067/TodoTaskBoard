import { Result } from "@/types/Result";
import { Task } from "@/types/Task";

export default class TarefaService {
  private baseURL: string = "https://localhost:7170/api/Tarefa";

  constructor() {
    this.baseURL = this.baseURL;
  }

  private async tarefahandler(
    url: string,
    method: string,
    data?: Task
  ): Promise<any> {
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

  async cadastrarTarefa(data: Task): Promise<void> {
    const url = `${this.baseURL}`;

    try {
      await this.tarefahandler(url, "POST", data);
    } catch (error) {
      throw new Error("Failed to register task.");
    }
  }

  async atualizarTarefa(data: Task): Promise<void> {
    const url = `${this.baseURL}/${data.id}`;

    try {
      await this.tarefahandler(url, "PUT", data);
    } catch (error) {
      throw new Error("Failed to update task.");
    }
  }

  async obterTarefa(id: number): Promise<Task> {
    const url = `${this.baseURL}/${id}`;

    try {
      return await this.tarefahandler(url, "GET");
    } catch (error) {
      throw new Error("Failed to get task.");
    }
  }

  async obterTodos(): Promise<Result<Task[]>> {
    const url = `${this.baseURL}/obtertodos`;

    try {
      return await this.tarefahandler(url, "GET");
    } catch (error) {
      throw new Error("Failed to get task.");
    }
  }

  async obterTodos(): Promise<Result<Task[]>> {
    const url = `${this.baseURL}/obtertodos`;

    try {
      return await this.tarefahandler(url, "GET");
    } catch (error) {
      throw new Error("Failed to get task.");
    }
  }

  async excluirTarefa(id: number): Promise<void> {
    const url = `${this.baseURL}/${id}`;

    try {
      await this.tarefahandler(url, "DELETE");
    } catch (error) {
      throw new Error("Failed to delete task.");
    }
  }
}
