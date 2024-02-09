import React, { useEffect, useState } from 'react';
import '../assets/Login.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { WizardStore, FormStep1 } from './store';
import ComboBox from '../components/ComboBox';
import Progress from '../components/Progress';
import BottomMenu from '../components/BottomMenu';
import logo from '../assets/images/logo.png';
import elementService from '../services/element.service';
import { Result } from './store';

const Step1: React.FC = () => { 
  const [transmissions, setTransmissions] = useState<any[]>([]); 
  const [energies, setEnergies] = useState<any[]>([]); 
  const [marques, setMarques] = useState<any[]>([]); 
  const [models, setModels] = useState<any[]>([]); 
  const [categories, setCategories] = useState<any[]>([]); 
  const [freinages, setFreinages] = useState<any[]>([]); 

  const fetchData=()=>{
    elementService.transmissions()
    .then((result: Result) => { 
      if (result.success) {
        let tempData = result.data;
        tempData.forEach((element: any) => { 
          element.label = element.nom; 
        });
        setTransmissions(tempData); 
      }
    })
    .catch((error: Error) => console.log(error));

    elementService.energies()
    .then((result: Result) => { 
      if (result.success) {
        let tempData = result.data;
        tempData.forEach((element: any) => { 
          element.label = element.nom; 
        });
        setEnergies(tempData); 
      }
    })
    .catch((error: Error) => console.log(error));

    elementService.marques()
    .then((result: Result) => { 
      if (result.success) {
        let tempData = result.data;
        tempData.forEach((element: any) => { 
          element.label = element.nom; 
        });
        setMarques(tempData); 
      }
    })
    .catch((error: Error) => console.log(error));

    elementService.categories()
    .then((result: Result) => { 
      if (result.success) {
        let tempData = result.data;
        tempData.forEach((element: any) => { 
          element.label = element.nom; 
        });
        setCategories(tempData); 
      }
    })
    .catch((error: Error) => console.log(error));

    
    elementService.freinages()
    .then((result: Result) => { 
      if (result.success) {
        let tempData = result.data;
        tempData.forEach((element: any) => { 
          element.label = element.nom; 
        });
        setFreinages(tempData); 
      }
    })
    .catch((error: Error) => console.log(error));

    
  }

  useEffect(()=>{
    fetchData();
  }, [])
  
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormStep1>({
    defaultValues: {
      ...WizardStore.useState((s) => s),
    },
  });

  const history = useHistory();

  const onSubmit: SubmitHandler<FormStep1> = (data: FormStep1) => {
    history.push('/step-2');
  };

  const handleChangeMarque=(value: any)=>{
    WizardStore.update((s) => {
      s.Marque = value
    });
    
    elementService.modeles(value.id)
    .then((result: Result) => { 
      if (result.success) {
        let tempData = result.data;
        tempData.forEach((element: any) => { 
          element.label = element.nom; 
        });
        setModels(tempData); 
      }
    })
    .catch((error: Error) => console.log(error));
  }


  const handleChangeModele = (value: any) => {
    WizardStore.update((s) => {
      s.Model = value
    });
  }
  const handleChangeTransmission = (value: any) => {
    WizardStore.update((s) => {
      s.Transmission = value
    });
  }
  const handleChangeEnergie = (value: any) => {
    WizardStore.update((s) => {
      s.Energie = value
    });
  }
  const handleChangeCategorie = (value: any) => {
    WizardStore.update((s) => {
      s.Categorie = value
    });
  }
  const handleChangeFreinage = (value: any) => {
    WizardStore.update((s) => {
      s.Freinage = value
    });
  }


  return (
    <>
      <div className="container">
        <Progress etat='1' />
        <div className="top-content">
          <img src={logo} style={{ width: '100px' }} />
        </div>

        <div className="ligne">
          <ComboBox id="marque-autocomplete" options={marques} label="Marque" defaultValue={WizardStore.useState((s) => s.Marque)} register={register} width="100%" handleChange={handleChangeMarque}/>
          <span></span>
          <ComboBox id="model-autocomplete" options={models} label="Model" defaultValue={WizardStore.useState((s) => s.Model)} register={register} width="100%" handleChange={handleChangeModele}/>
        </div>
        <br />
        <ComboBox id="categorie-autocomplete" options={categories} label="Categorie" defaultValue={WizardStore.useState((s) => s.Categorie)} register={register} width="100%"  handleChange={handleChangeCategorie}/>
        <br />
        <ComboBox id="energie-autocomplete" options={energies} label="Energie" defaultValue={WizardStore.useState((s) => s.Energie)} register={register} width="100%"  handleChange={handleChangeEnergie}/>
        <br />
        <ComboBox id="transmission-autocomplete" options={transmissions} label="Transmission" defaultValue={WizardStore.useState((s) => s.Transmission)} register={register} width="100%" handleChange={handleChangeTransmission}/>
        <br />
        <ComboBox id="freinage-autocomplete" options={freinages} label="Freinage" defaultValue={WizardStore.useState((s) => s.Freinage)} register={register} width="100%"  handleChange={handleChangeFreinage}/>


        <footer className='button-footer'>
          <span onClick={() => history.goBack()} className="back">
            Back
          </span>
          <button type="submit" className="next-btn" onClick={handleSubmit(onSubmit)}>
            NEXT
          </button>
        </footer>
      </div>
      <BottomMenu />
    </>
  );
};

export default Step1;
