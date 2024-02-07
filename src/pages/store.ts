import { registerInDevtools, Store } from "pullstate";

export interface FormStep1 {
  Marque?: string | undefined;
  Model?: string | undefined;
  Categorie?: string | undefined;
  Energie?: string | undefined;
  Transmission: string | undefined; // Corrected property name
  Freinage: string | undefined;
}

export interface FormStep2 {
  Kilometrage: number | undefined;
  Puissance?: number | undefined;
  Consommation?: number | undefined;
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
}

export type FormValues = {
  progress: number;
} & FormStep1 & FormStep2 & FormStep3 & FormStep4;

export const WizardStore = new Store<FormValues>({
  Marque: "",
  Model: "",
  Categorie: "",
  Puissance: 0,
  Consommation: 0,
  Energie: "",
  Kilometrage: 0,
  Place: 0,
  Porte: 0,
  Transmission: "", 
  Freinage: "",
  Equipement: [],
  Description: "",
  Etat: 0,
  Prix: 0,
  progress: 10,
});

registerInDevtools({
  WizardStore,
});
