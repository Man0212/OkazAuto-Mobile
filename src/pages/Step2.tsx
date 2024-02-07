import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { WizardStore, FormStep2 } from './store';
import Progress from '../components/Progress';
import BottomMenu from '../components/BottomMenu';
import logo from '../assets/images/logo.png';


const Step2: React.FC = () => {

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormStep2>({
    defaultValues: {
      ...WizardStore.useState((s) => s),
    },
  });

  const history = useHistory();

  const onSubmit: SubmitHandler<FormStep2> = (data: FormStep2) => {
    WizardStore.update((s) => {
      s.progress = 66;
      s.Kilometrage = data.Kilometrage as number; 
      s.Puissance = data.Puissance as number;
      s.Consommation = data.Consommation as number;
      s.Porte = data.Porte as number;
      s.Place = data.Place as number;
    });
    history.push('/step-3');
  };

  return (
    <>
    <div className="container">
      <Progress etat='2' />
      <div className="top-content">
      <img src={logo} style={{width:'100px'}} />
      </div>
      <br />
        <div className="inputs">
        <input type="number" id="Kilometrage" defaultValue={WizardStore.useState((s) => s.Kilometrage)} {...register('Kilometrage', { required: true })} />
        <label htmlFor="Kilometrage" className="input-label">
          Kilometrage
        </label>
      </div>
      <br />
      <div className="inputs">
          <input type="number" id="Puissance" defaultValue={WizardStore.useState((s) => s.Puissance)} {...register('Puissance', { required: true })} />
          <label htmlFor="Puissance" className="input-label">
            Puissance
          </label>
        </div>
        <br />
      <div className="inputs">
          <input type="number" id="Consommation" defaultValue={WizardStore.useState((s) => s.Consommation)} {...register('Consommation', { required: true })} />
          <label htmlFor="Consommation" className="input-label">
            Consommation
          </label>
      </div>
      <br/>
      <div className="ligne">
        <div className="inputs">
          <input type="number" id="Porte" defaultValue={WizardStore.useState((s) => s.Porte)} {...register('Porte', { required: true })} />
          <label htmlFor="Porte" className="input-label">
            Porte
          </label>
        </div>
        <span></span>
        <div className="inputs">
          <input type="number" id="Place" defaultValue={WizardStore.useState((s) => s.Place)} {...register('Place', { required: true })} />
          <label htmlFor="Place" className="input-label">
            Place
          </label>
        </div>
      </div>


      <div className='button-footer'>
        <span onClick={() => history.goBack()} className="back-btn">
          Back
        </span>
        <button type="submit" className="next-btn" onClick={handleSubmit(onSubmit)}>
          NEXT
        </button>
      </div>
    </div>
        <BottomMenu/>
        </>
  );
};

export default Step2;
