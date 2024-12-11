import { Grid } from '@components/grid';
import { Box, Divider, styled, Typography } from '@mui/material';

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-around',
  marginTop: '16px',
  gap: '12px',

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

const Image = styled('img')(({ theme }) => ({
  width: 'min(450px, 100%)',
  borderRadius: '5px',
  backgroundColor: theme.palette.primary[700],
  objectFit: 'cover',
  flexShrink: 0,
}));

export const ProjectsSection = () => {
  return (
    <Box id='projects' padding='32px'>
      <Typography variant='h2' textTransform='uppercase' textAlign='center'>
        Projetos
      </Typography>
      <Container>
        <Image src='/src/assets/images/gobattour.webp' alt='Gobattour' />
        <Box display='flex' flexDirection='column' gap='8px'>
          <Typography
            variant='h3'
            component='a'
            color='primary.main'
            href='https://gobattour.web.app'
            target='_blank'
            textAlign='center'
          >
            Gobattour
          </Typography>
          <Typography variant='body1' color='grey.700' textAlign='center' sx={{ textWrap: 'balance' }}>
            Projeto desenvolvido com React e Typescript, e hospedado no Firebase. O site é uma landing page para uma
            empresa de turismo que oferece diversos tipos de serviços, como passagens, hospedagem e planejamento de
            viagens.
          </Typography>
        </Box>
      </Container>
      <Divider sx={{ marginBlock: '16px' }} />
      <Container sx={{ flexDirection: { md: 'row-reverse !important', sx: 'row' } }}>
        <Box display='flex' flexDirection='column' gap='8px' width='min(450px, 100%)' flexShrink={0}>
          <Image src='/src/assets/images/job_Interview_assistence_home.webp' alt='Gobattour' />
          <Image src='/src/assets/images/job_Interview_assistence_chat.webp' alt='Gobattour' />
        </Box>
        <Box display='flex' flexDirection='column' gap='8px'>
          <Typography variant='h3' color='primary.main' textAlign='center'>
            Job Interview Assistence
          </Typography>
          <Typography variant='body1' color='grey.700' textAlign='center' sx={{ textWrap: 'balance' }}>
            Projeto Full Stack desenvolvido em React, Expo e NodeJS. Foi o projeto desenvolvido curso de pós graduação e
            baseia-se em uma plataforma que conversa com o uma inteligência artificial (ChatGPT) focando em auxiliar um
            especialista de RH (recursos humanos) a analisar candidatos para uma vaga de trabalho.
          </Typography>
        </Box>
      </Container>
      <Divider sx={{ marginBlock: '16px' }} />
      <Container>
        <Box display='flex' gap='8px'>
          <Grid maxColumns={2}>
            <Image src='/src/assets/images/live_app_login.webp' alt='Live App' />
            <Image src='/src/assets/images/live_app_dark.webp' alt='Live App' />
          </Grid>
        </Box>
        <Box display='flex' flexDirection='column' gap='8px'>
          <Typography variant='h3' color='primary.main' textAlign='center'>
            Life App
          </Typography>
          <Typography variant='body1' color='grey.700' textAlign='center' sx={{ textWrap: 'balance' }}>
            Projeto Full Stack desenvolvido em React Native com Expo, REST e Socket, e Typescript. É um App mobile de
            uso pessoal que permite gerenciar a lista de compras de casa. Nele, é possivel adicionar pessoas em grupos
            de modo que possam compartilhar as listas de compras e realizar as compras juntas. Ao longo do tempo, o
            aplicativo tenta deduzir, com base no histórico de compras, quais produtos devem ser comprados nos próximos
            dias. O objetivo estar sempre implementando novas features conforme a necessidade.
          </Typography>
        </Box>
        <Divider />
        <Box display='flex' gap='8px'>
          <Grid maxColumns={2}>
            <Image src='/src/assets/images/live_app_market.webp' alt='Live App' />
            <Image src='/src/assets/images/live_app_group.webp' alt='Live App' />
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
