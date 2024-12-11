import { Grid } from '@components/grid';
import { Check } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

const Item = ({ children }: { children: React.ReactNode }) => (
  <Typography variant='body1' textAlign='center'>
    <Check fontSize='inherit' color='success' /> {children}
  </Typography>
);

export const SkillsSection = () => {
  return (
    <Box id='skills' padding='32px' bgcolor={({ palette }) => palette.grey[300]}>
      <Typography variant='h2' textTransform='uppercase' textAlign='center'>
        Tecnologias e Habilidades
      </Typography>
      <Grid marginTop='16px'>
        <Item>Desenvolvimento Ágil</Item>
        <Item>Typescript</Item>

        <Item>Senso de priorização</Item>
        <Item>NodeJs</Item>

        <Item>Autogerencia</Item>
        <Item>React / React Native / Expo</Item>

        <Item>Trabalho em equipe</Item>
        <Item>GraphQL / REST</Item>

        <Item>Cultura de feedback</Item>
        <Item>HTML5 / CSS / JavaScript</Item>

        <Item>Comunicação</Item>
        <Item>Git / GitHub</Item>

        <Box />
        <Item>SQL / PostgreSQL / MySQL</Item>

        <Box />
        <Item>Python</Item>

        <Box />
        <Item>Google Cloud Platform / AWS / Firebase / Heroku</Item>
      </Grid>
    </Box>
  );
};
