/* eslint-disable @typescript-eslint/ban-types */
import axios, { isAxiosError } from "axios";
axios.defaults.baseURL = import.meta.env.VITE_API_URL;
class Api {
  async post(path: string, body: any) {
    return await this.request(path, body, "post");
  }
  async get(path: string, body: any) {
    return await this.request(path, body, "get");
  }
  public async request(path: string, body: any, method: methods) {
    try {
      const t = await axios[method](path, body);
      return { statusCode: t.status, data: t.data };
    } catch (e) {
      console.log("e", e);
      console.log(e);
      if (!isAxiosError(e)) {
        return { statusCode: null, data: null };
      }
      return { statusCode: e.response?.status, data: e.response?.data };
    }
  }
}
export const api = new Api();
type methods = "get" | "post";
