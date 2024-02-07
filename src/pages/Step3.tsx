import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { WizardStore, FormStep3 } from './store';
import Equipement from '../components/Equipement';
import Progress from '../components/Progress';
import BottomMenu from '../components/BottomMenu';
import { IonItem, IonList, IonTextarea } from '@ionic/react';
import { Description } from '@mui/icons-material';

const Step3: React.FC = () => {
  const Equipements = [
    { title: 'Bluetooh' },
    { title: 'radio' },
    { title: 'camera' },
    { title: 'antenne' },
    { title: 'fenetre' },
    { title: 'fil' },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormStep3>({
    defaultValues: {
      ...WizardStore.useState((s) => s),
    },
  });

  const [selectedValues, setSelectedValues] = React.useState([]);

  const handleSelectionChange = (values) => {
    setSelectedValues(values);
  };

  const handleClearSelection = (valueToRemove) => {
    setSelectedValues((prevSelectedValues) =>
      prevSelectedValues.filter((value) => value.title !== valueToRemove.title)
    );
  };

  const [description, setDescription] = React.useState('');
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
    console.log(e.target.value);
  };

  const history = useHistory();

  const onSubmit: SubmitHandler<FormStep3> = (data: FormStep3) => {
    // Traitement des données du formulaire
    WizardStore.update((s) => {
      s.progress = 66;
      s.Description = description;
      s.Equipement = selectedValues.map((value) => value.title);
      // Gérer les fichiers sélectionnés ici
      // data.photoFiles contiendra les fichiers sélectionnés
    });
    history.push('/step-4');
  };

  return (
    <>
      <div className="container">
        <Progress etat='3' />
        <div className="top-content"><p><span>O</span>kaz</p></div>
        <br />
        <IonTextarea
          label="description"
          labelPlacement="floating"
          fill="outline"
          value={WizardStore.useState((s) => s.Description)}
          onIonChange={(e) => handleChangeDescription(e)}
          placeholder="description . . ."
          style={{ width: '100%', height: '150px', marginBottom: '20px' , color:'grey' }}
        />

        <Equipement
          options={Equipements}
          selectedValues={selectedValues}
          onSelectionChange={handleSelectionChange}
          onClearSelection={handleClearSelection}
        />


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

export default Step3;
