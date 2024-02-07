import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  '',
  '',
  '',
  '',
];

export default function Progress(props) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={props.etat} alternativeLabel style={{ backgroundColor: 'transparent' }}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
