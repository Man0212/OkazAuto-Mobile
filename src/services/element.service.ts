// user.service.ts

import axios, { AxiosResponse } from 'axios';
import { BACKEND_URL } from '../others/URL';
import { Result } from '../pages/store';

const BASE = BACKEND_URL + "/api/v1";
const TRANSMISSIONS = BASE + "/transmissions";
const ENERGIES = BASE + "/energies";
const CATEGORIES = BASE + "/categories";
const MARQUES = BASE + "/marques";
const MODELES = BASE + "/modeles/marque";
const FREINAGES = BASE + "/freinages";
const EQUIPEMENTS = BASE + "/equipements";

class ElementService {
  
    constructor() {
    }

    async transmissions (): Promise<Result> {
        try {
            const response: AxiosResponse = await axios.get(TRANSMISSIONS);
            if (response.status === 200) {
                return {success: true, error: undefined, data: response.data.data};
            } else {
                return {success: false, error: response.data.error, data: undefined};
            }
        } catch (error) {
            return {success: false, error: "Problème lors de la connection", data: undefined};
        }
    }
    async energies (): Promise<Result> {
        try {
            const response: AxiosResponse = await axios.get(ENERGIES);
            if (response.status === 200) {
                return {success: true, error: undefined, data: response.data.data};
            } else {
                return {success: false, error: response.data.error, data: undefined};
            }
        } catch (error) {
            return {success: false, error: "Problème lors de la connection", data: undefined};
        }
    }
    async categories (): Promise<Result> {
        try {
            const response: AxiosResponse = await axios.get(CATEGORIES);
            if (response.status === 200) {
                return {success: true, error: undefined, data: response.data.data};
            } else {
                return {success: false, error: response.data.error, data: undefined};
            }
        } catch (error) {
            return {success: false, error: "Problème lors de la connection", data: undefined};
        }
    }
    async marques (): Promise<Result> {
        try {
            const response: AxiosResponse = await axios.get(MARQUES);
            if (response.status === 200) {
                return {success: true, error: undefined, data: response.data.data};
            } else {
                return {success: false, error: response.data.error, data: undefined};
            }
        } catch (error) {
            return {success: false, error: "Problème lors de la connection", data: undefined};
        }
    }
    async modeles (idMarque: Number): Promise<Result> {
        try {
            const response: AxiosResponse = await axios.get(MODELES + "/" + idMarque);
            if (response.status === 200) {
                return {success: true, error: undefined, data: response.data.data};
            } else {
                return {success: false, error: response.data.error, data: undefined};
            }
        } catch (error) {
            return {success: false, error: "Problème lors de la connection", data: undefined};
        }
    }
    async freinages (): Promise<Result> {
        try {
            const response: AxiosResponse = await axios.get(FREINAGES);
            if (response.status === 200) {
                return {success: true, error: undefined, data: response.data.data};
            } else {
                return {success: false, error: response.data.error, data: undefined};
            }
        } catch (error) {
            return {success: false, error: "Problème lors de la connection", data: undefined};
        }
    }
    async equipements (): Promise<Result> {
        try {
            const response: AxiosResponse = await axios.get(EQUIPEMENTS);
            if (response.status === 200) {
                return {success: true, error: undefined, data: response.data.data};
            } else {
                return {success: false, error: response.data.error, data: undefined};
            }
        } catch (error) {
            return {success: false, error: "Problème lors de la connection", data: undefined};
        }
    }
  
  }
  
  export default new ElementService();