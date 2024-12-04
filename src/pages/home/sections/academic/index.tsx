import { Box, Typography } from '@mui/material';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import { School } from '@mui/icons-material';

interface MilestoneProps {
  year: string;
  institution: string;
  degree: string;
}

const Milestone = ({ year, institution, degree }: MilestoneProps) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent sx={{ m: 'auto 0' }}>
        <Typography variant='body1' fontWeight={600}>
          {year}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color='primary'>
          <School />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant='h3'>{degree}</Typography>
        <Box height='8px' />
        <Typography variant='body1'>{institution}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export const AcademicSection = () => {
  return (
    <Box
      padding='32px'
      display='flex'
      flexDirection='column'
      gap='10px'
      bgcolor={({ palette }) => palette.primary[400]}
    >
      <Typography variant='h2' textTransform='uppercase' textAlign='center'>
        Formação acadêmica
      </Typography>

      <Timeline position='alternate'>
        <Milestone
          year='2024'
          institution='Instituto Mauá de Tecnologia - São Caetano do Sul'
          degree='Pós Graduação em Desenvolvimento de Softwares'
        />
        <Milestone
          year='2018 - 2023'
          institution='Escola Politécnica da USP - São Paulo'
          degree='Graduação em Engenharia Química'
        />
        <Milestone
          year='2013 - 2016'
          institution='ETEC Lauro Gomes - São Bernardo do Campo'
          degree='Técnico em Química'
        />
      </Timeline>
    </Box>
  );
};
