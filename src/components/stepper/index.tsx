import { Box, styled, Typography } from '@mui/material';
import React from 'react';

const HorizontalLine = styled(Box)(({ theme }) => ({
  flex: 0.2,
  height: '2px',
  borderRadius: '1px',
  backgroundColor: theme.palette.primary[500],
}));

interface StepperItemProps {
  selected?: boolean;
  onClick: () => void;
  company: string;
  imageSrc: string;
}

const StepperItem = ({ company, imageSrc, selected, onClick }: StepperItemProps) => {
  return (
    <Box
      onClick={onClick}
      display='flex'
      flexDirection='column'
      alignItems='center'
      width='100px'
      gap='8px'
      sx={[{ cursor: 'pointer' }, !selected ? { opacity: 0.5 } : {}]}
    >
      <img src={imageSrc} width={50} height={50} style={{ objectFit: 'cover', borderRadius: '8px' }} />
      <Typography variant='body1' sx={{ textWrap: 'balance' }} textAlign='center'>
        {company}
      </Typography>
    </Box>
  );
};

interface CustomStepperProps {
  step: number;
  onStepChange: (step: number) => void;
  steps: { company: string; imageSrc: string }[];
}

export const CustomStepper = ({ step, onStepChange, steps }: CustomStepperProps) => {
  return (
    <Box display='flex' width='100%' alignItems='center' justifyContent='center' gap='8px' flexWrap='wrap'>
      {steps.map(({ company, imageSrc }, index) => (
        <React.Fragment key={index}>
          <StepperItem
            onClick={() => onStepChange(index)}
            selected={index === step}
            company={company}
            imageSrc={imageSrc}
          />
          {index !== steps.length - 1 && <HorizontalLine />}
        </React.Fragment>
      ))}
    </Box>
  );
};
