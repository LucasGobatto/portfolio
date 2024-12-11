import { Box, Typography } from '@mui/material';

export const AboutMeSection = () => {
  return (
    <Box id='about' bgcolor='white' padding='32px' display='flex' flexDirection='column' gap='10px'>
      <Typography variant='h2' textTransform='uppercase' textAlign='center'>
        Sobre mim
      </Typography>
      <Box paddingBlock='16px'>
        <Typography variant='body1' sx={{ textWrap: 'balance' }} textAlign='center'>
          <cite>
            "Aquele que trabalha duro pode superar um gênio, mas de nada adianta trabalho duro se você não confia em
            você mesmo."
          </cite>
        </Typography>
        <Box height='4px' />
        <Typography variant='body2' sx={{ textWrap: 'balance' }} textAlign='center'>
          Naruto - Rock Lee.
        </Typography>
      </Box>
      <Typography variant='body1' sx={{ textWrap: 'balance' }} textAlign='center'>
        Sou um profissional determinado a cumprir as tarefas, animado e adoro trabalhar em equipe. Minha experiencia
        profissional é pautada em sempre aprender com pessoas mais experientes e enfrentar os desafios com paciência e
        perseverança. Minha meta é me tornar um profissional de referencia, tanto no âmbito técnico, quanto na
        liderança.
      </Typography>
      <Typography variant='body1' sx={{ textWrap: 'balance' }} textAlign='center'>
        Tenho aprendido com ótimos exemplos ao longo da minha vida profissional a me tornar uma pessoa mais forte e
        enfrentar minhas dificuldades, além de como criar laços estreitos com meus colegas de equipe, sempre visando a
        melhor convivência e maior produtividade.
      </Typography>
      <Typography variant='body1' sx={{ textWrap: 'balance' }} textAlign='center'>
        Meu estilo de trabalho é levar os desafios com leveza e seriedade, a fim de tornar as tarefas mais prazerosas e
        atingir excelência nas entregas.
      </Typography>
    </Box>
  );
};
