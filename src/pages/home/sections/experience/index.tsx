import { CustomStepper } from '@components/stepper';
import { Circle } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { milestones } from './milestones';

interface MilestoneProps {
  period: string;
  company: string;
  role: string;
  description?: string;
  location?: string;
}

const Milestone = ({ period, company, role, description, location }: MilestoneProps) => {
  return (
    <Box marginBlock='24px'>
      <Typography variant='h3' textAlign='center' sx={{ textWrap: 'balance' }}>
        {role}
      </Typography>
      <Box marginTop='16px' display='flex' justifyContent='space-around' flexWrap='wrap'>
        <Typography variant='body1' fontWeight={600} display='flex' alignItems='center' gap='4px'>
          {company} <Circle sx={{ width: '6px', height: '6px' }} />
          <Typography variant='body2' component='span'>
            {location}
          </Typography>
        </Typography>
        <Typography variant='body2'>({period})</Typography>
      </Box>
      <Box height='16px' />
      <Typography variant='body1' textAlign='center' sx={{ textWrap: 'balance' }}>
        {description}
      </Typography>
    </Box>
  );
};

export const ExperienceSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Box id='experience' padding='32px' bgcolor='white'>
      <Typography variant='h2' textTransform='uppercase' textAlign='center'>
        Experiências
      </Typography>

      <Box marginBlock='16px'>
        <CustomStepper step={activeStep} onStepChange={setActiveStep} steps={milestones} />
      </Box>

      <Milestone {...milestones[activeStep]} />
    </Box>
  );
};
