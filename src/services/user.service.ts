// user.service.ts

import axios, { AxiosResponse } from 'axios';
import { BACKEND_URL } from '../others/URL';
import { Result } from '../pages/store';

const BASE = BACKEND_URL + "/authentification";
const LOGIN = BASE + "/utilisateur";
const SIGN = BASE + "/sign-in";

interface User {
    username: string;
    password: string;
}

  
class UserService {
    private currentUser: User | null;
  
    constructor() {
      this.currentUser = null;
    }
  
    async login(nom: string, motDePasse: string): Promise<Result> {
        try {
          const response: AxiosResponse = await axios.post(LOGIN, { nom, motDePasse });
          if (response.status === 200) {
            localStorage.setItem("okazToken", response.data.tokens);
            return {success: true, error: undefined, data: undefined};
          } else {
            return {success: false, error: response.data.error, data: undefined};
          }
        } catch (error) {
          return {success: false, error: "Problème de connection", data: undefined};
        }
      }
    async sign(nom: string,email: string, motDePasse: string): Promise<Result> {
        try {
        const response: AxiosResponse = await axios.post(SIGN, { nom, email, motDePasse });
        if (response.status === 200) {
            localStorage.setItem("okazToken", response.data.tokens);
            return {success: true, error: undefined, data: undefined};
        } else {
            return {success: false, error: response.data.error, data: undefined};
        }
        } catch (error) {
        return {success: false, error: "Problème de connection", data: undefined};
        }
    }
    
      async logout(): Promise<void> {
        localStorage.removeItem("okazToken");
      }
    
      getCurrentUser(): string | null {
        return localStorage.getItem("okazToken");
      }
    
      isLoggedIn(): boolean {
        return !!localStorage.getItem("okazToken");
      }
  }
  
  export default new UserService();
  