import axios, { AxiosInstance } from "axios";

export class Sign {
  private api: AxiosInstance;
  constructor() {
    this.api = axios.create({
      baseURL: "https://www.pre-onboarding-selection-task.shop",
      headers: { "Content-Type": "application/json" },
    });
  }

  async signin(email: string, password: string) {
    console.log("api", email, password);
    return this.api
      .post("/auth/signin", { email: email, password: password })
      .catch((err) => {
        console.log(err);
        throw err; // 오류를 잡아서 콘솔에 출력한 후 다시 throw하여 상위에서 오류 처리 가능
      });
  }

  async signup(email: string, password: string) {
    return this.api
      .post("/auth/signup", { email: email, password: password })
      .catch((err: object) => {
        console.log(err);
        throw err; // 오류를 잡아서 콘솔에 출력한 후 다시 throw하여 상위에서 오류 처리 가능
      });
  }
}
