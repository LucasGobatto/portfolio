import { Box, styled, Typography } from '@mui/material';

const ProfileImage = styled('img')(({ theme }) => ({
  width: '180px',
  aspectRatio: 1,
  borderRadius: '16px',
  backgroundColor: theme.palette.primary[700],
  objectFit: 'cover',
}));

export const ResumeSection = () => {
  return (
    <Box
      id='resume'
      display='flex'
      padding='56px 32px'
      bgcolor={({ palette }) => palette.primary[300]}
      width='100%'
      alignItems='center'
      justifyContent='center'
      gap='24px'
    >
      <ProfileImage src='/src/assets/images/profile.webp' alt='Lucas Gobatto Bisaio' />
      <Box>
        <Typography variant='h1'>
          Lucas Gobatto Bisaio{' '}
          <Typography variant='body2' component='span'>
            (Ele/Dele)
          </Typography>
        </Typography>
        <Box height='8px' />
        <Typography variant='body1'>Desenvolvedor de Softwares Full Stack</Typography>
        <Box height='4px' />
        <Typography variant='body1'>Brasileiro - 11/12/1998</Typography>
        <Box height='4px' />
        <Typography variant='body1'>São Paulo - Brasil</Typography>
      </Box>
    </Box>
  );
};
