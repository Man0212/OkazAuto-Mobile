import { registerInDevtools, Store } from "pullstate";

export interface Vehicule {
  marque: string | undefined;
  marqueId: Number | undefined;
  modele: string | undefined;
  modeleId: Number | undefined;
  categorieId: Number | undefined;
  categorie: string | undefined;
  energieId: Number | undefined;
  energie: string | undefined;
  transmissionId: Number | undefined;
  transmission: string | undefined;
  freinage: string |undefined;
  freinageId: Number | undefined;
  consommation: Number | undefined;
  kilometrage: Number | undefined;
  puissance: Number | undefined;
  place: Number | undefined;
  porte: Number | undefined;
}

export interface Annonce {
  vehicule: Vehicule | undefined;
  description: string | undefined;
  prixInitial: Number | undefined;
}

export interface Result {
  error: string | undefined;
  data: any;
  success: Boolean | undefined;
}

export interface FormStep1 {
  Marque: object | undefined;
  Model: object | undefined;
  Categorie: object | undefined;
  Energie: object | undefined;
  Transmission: object | undefined; 
  Freinage: object | undefined;
}

export interface FormStep2 {
  Kilometrage: number | undefined;
  Puissance: number | undefined;
  Consommation: number | undefined;
  Place: number | undefined;
  Porte: number | undefined;
}

export interface FormStep3 {
  Equipement: string[] | undefined;
  Description: string | undefined;
}

export interface FormStep4 {
  Etat: number | undefined;
  Prix: number | undefined;
  Images: string[] | undefined;
}

export type FormValues = {
  progress: number;
} & FormStep1 & FormStep2 & FormStep3 & FormStep4;

export const WizardStore = new Store<FormValues>({
  Marque: undefined,
  Model: undefined,
  Categorie: undefined,
  Energie: undefined,
  Transmission: undefined, 
  Freinage: undefined,
  Kilometrage: 0,
  Puissance: 0,
  Consommation: 0,
  Place: 0,
  Porte: 0,
  Equipement: [],
  Images: [],
  Description: "",
  Etat: 0,
  Prix: 0,
  progress: 10,
});

registerInDevtools({
  WizardStore,
});