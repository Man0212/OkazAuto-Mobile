import React from 'react';
import '../assets/Login.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { WizardStore, FormStep1 } from './store';
import ComboBox from '../components/ComboBox';
import Progress from '../components/Progress';
import BottomMenu from '../components/BottomMenu';
import logo from '../assets/images/logo.png';


const Step1: React.FC = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormStep1>({ defaultValues: WizardStore.useState((s) => s) });  // Ajout du type générique FormStep1

  const marques = [
    { label: 'Mercedes' },
    { label: 'Porsche' }
  ];

  const models = [
    { label: 'AMG' },
    { label: 'C63' }
  ];

  const categories = [
    { label: 'sport' },
    { label: 'luxe' }
  ];

  const freinages = [
    { label: 'sport' },
    { label: 'luxe' }
  ];

  const energies = [
    { label: 'Essence' },
    { label: 'Diesel' },
    { label: 'Electrique' },
  ];
  
  const transmissions = [
    { label: 'tsara'}
  ]

  const history = useHistory();

  const onSubmit: SubmitHandler<FormStep1> = (data) => {
    WizardStore.update((s) => {
      s.progress = 33;
      s.Marque = data.Marque as string;
      s.Model = data.Model as string;
      s.Categorie = data.Categorie as string;
      s.Energie = data.Energie as string;
      s.Freinage = data.Freinage as string;
      s.Transmission = data.Transmission as string;
    });
    history.push('/step-2');
  };

  return (
    <>
    <div className="container">
     <Progress etat='1' />
      <div className="top-content">
      <img src={logo} style={{width:'100px'}} />
      </div>

    <div className="ligne">
    <ComboBox id="marque-autocomplete" options={marques} label="Marque" defaultValue={WizardStore.useState((s) => s.Marque)} register={register} width="100%"/>
        <span></span>
    <ComboBox id="model-autocomplete" options={models} label="Model" defaultValue={WizardStore.useState((s) => s.Model)} register={register} width="100%"/>
    </div>
    <br/>
    <ComboBox id="categorie-autocomplete" options={categories} label="Categorie" defaultValue={WizardStore.useState((s) => s.Categorie)} register={register} width="100%"/>
    <br/>
    <ComboBox id="energie-autocomplete" options={energies} label="energie" defaultValue={WizardStore.useState((s) => s.Energie)} register={register} width="100%"/>
    <br/>
    <ComboBox id="transmission-autocomplete" options={transmissions} label="transmission" defaultValue={WizardStore.useState((s) => s.Transmission)} register={register} width="100%"/>
    <br/>
    <ComboBox id="freinage-autocomplete" options={freinages} label="freinage" defaultValue={WizardStore.useState((s) => s.Freinage)} register={register} width="100%"/>


      <footer className='button-footer'>
        <span onClick={() => history.goBack()} className="back-btn">
          Back
        </span>
        <button type="submit" className="next-btn" onClick={handleSubmit(onSubmit)}>
          NEXT
        </button>
      </footer>
    </div>
    <BottomMenu/>
    </>
  );
};

export default Step1;
