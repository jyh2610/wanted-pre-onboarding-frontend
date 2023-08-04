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
  async updateTodo(todo: string, isCompleted: boolean) {
    const headers = {
      Authorization: this.token,
      "Content-Type": "application/json",
    };
    return await this.api.put("/todo", { todo, isCompleted }, { headers });
  }
  async deleteTodo(id: string) {
    return await this.api.delete(`/todos/:${id}`);
  }
}
