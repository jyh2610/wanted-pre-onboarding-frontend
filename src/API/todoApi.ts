import axios, { AxiosInstance } from "axios";

export class Todo {
  private api: AxiosInstance;
  token: string;
  constructor(token: string) {
    this.token = token;
    this.api = axios.create({
      baseURL: "https://www.pre-onboarding-selection-task.shop",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  async createTodo(todo: string) {
    const headers = {
      Authorization: `Bearer ${this.token}`,
      "Content-Type": "application/json",
    };
    await this.api.post(
      "/todos",
      {
        todo: todo,
      },
      { headers }
    );
  }
  async getTodo() {
    return this.api.get("/todos");
  }
  async updateTodo(todo: string, id: number, isCompleted: boolean) {
    const headers = {
      Authorization: `Bearer ${this.token}`,
      "Content-Type": "application/json",
    };
    return await this.api.put(
      `/todos/${id}`,
      { todo, isCompleted },
      { headers }
    );
  }
  async deleteTodo(id: number) {
    return await this.api.delete(`/todos/${id}`);
  }
}
