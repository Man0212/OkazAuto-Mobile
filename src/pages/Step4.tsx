import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { WizardStore, FormStep4 } from './store';
import Progress from '../components/Progress';
import BottomMenu from '../components/BottomMenu';
import logo from '../assets/images/logo.png';


const Step4: React.FC = () => {

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormStep4>({
    defaultValues: {
      ...WizardStore.useState((s) => s),
    },
  });

  const history = useHistory();

  const onSubmit: SubmitHandler<FormStep4> = (data: FormStep4) => {
    WizardStore.update((s) => {
      s.progress = 66;
      s.Etat = data.Etat as number;
      s.Prix = data.Prix as number;
    });
    history.push('/Confirmation');
  };

  return (
    <>
      <div className="container">
        <Progress etat='3' />
        <div className="top-content">
          <img src={logo} style={{ width: '100px' }} />
        </div>
        <br />
        <div className="inputs">
          <input type="number" id="Etat" defaultValue={WizardStore.useState((s) => s.Etat)} {...register('Etat', { required: true })} />
          <label htmlFor="Etat" className="input-label">
            Etat
          </label>
        </div>
        <br />
        <div className="inputs">
          <input type="number" id="Prix" defaultValue={WizardStore.useState((s) => s.Prix)} {...register('Prix', { required: true })} />
          <label htmlFor="Prix" className="input-label">
            Prix
          </label>
        </div>
        <br />
        <input type="file" accept="image/*" multiple style={{height:'50px'}}/>



        <div className='button-footer'>
        <span onClick={() => history.goBack()} className="back-btn">
            Back
          </span>
          <button type="submit" className="next-btn" onClick={handleSubmit(onSubmit)}>
            NEXT
          </button>
        </div>
      </div>
      <BottomMenu />
    </>
  );
};

export default Step4;
