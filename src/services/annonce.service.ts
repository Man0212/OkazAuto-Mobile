// user.service.ts

import axios, { AxiosResponse } from 'axios';
import { BACKEND_URL } from '../others/URL';
import { Annonce, Result } from '../pages/store';
import userService from './user.service';

const BASE = BACKEND_URL + "/api/v1/annonces";
const ANNONCES = BASE + "/moi";


  
class AnnonceService {
  
    constructor() {
    }

    async updateState(annonceId: Number): Promise<Result> {
      const annonce = {
        id: annonceId,
        etat: 15
      };
      try {
        const response: AxiosResponse = await axios.put(BASE, annonce,
          { 
            headers: {'Authorization': 'Bearer ' + userService.getCurrentUser()},
          }
        );
        if (response.status === 200) {
          return {success: true, error: undefined, data: response.data.data};
        } else {
          return {success: false, error: response.data.error, data: undefined};
        }
      } catch (error) {
        return {success: false, error: "Problème de connection", data: undefined};
      }
    } 

    async create(annonce: Annonce): Promise<Result> {
      try {
        const response: AxiosResponse = await axios.post(BASE, annonce,
          { 
            headers: {'Authorization': 'Bearer ' + userService.getCurrentUser()},
          }
        );
        if (response.status === 200) {
          return {success: true, error: undefined, data: response.data.data};
        } else {
          return {success: false, error: response.data.error, data: undefined};
        }
      } catch (error) {
        return {success: false, error: "Problème de connection", data: undefined};
      }
    }
  
    async mesAnnonces(): Promise<Result> {
        try {
          const response: AxiosResponse = await axios.get(ANNONCES, 
            { 
              headers: {'Authorization': 'Bearer ' + userService.getCurrentUser()}
            }
          );
          if (response.status === 200) {
            return {success: true, error: undefined, data: response.data.data};
          } else {
            return {success: false, error: response.data.error, data: undefined};
          }
        } catch (error) {
          return {success: false, error: "Problème de connection", data: undefined};
        }
    }

    async details(id: Number): Promise<Result> {
        try {
            const response: AxiosResponse = await axios.get(BASE + "/" + id);
            if (response.status === 200) {
              return {success: true, error: undefined, data: response.data.data};
            } else {
              return {success: false, error: response.data.error, data: undefined};
            }
          } catch (error) {
            return {success: false, error: "Problème de connection", data: undefined};
          }
    }
    
  }
  
  export default new AnnonceService();
  