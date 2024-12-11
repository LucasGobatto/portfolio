import { Grid } from '@components/grid';
import { Email, GitHub, LinkedIn, Phone, WhatsApp } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

export const ContactSection = () => {
  return (
    <Box id='contact' padding='32px' bgcolor={({ palette }) => palette.primary[400]}>
      <Typography variant='h2' textTransform='uppercase' textAlign='center'>
        Contatos
      </Typography>
      <Box height='16px' />
      <Grid maxColumns={1}>
        <Typography variant='body1' textAlign='center'>
          <a href='https://www.linkedin.com/in/lucas-gobatto-bisaio/' target='_blank' rel='noreferrer noopener'>
            <Typography variant='body1' fontWeight={600} color='primary.main'>
              <LinkedIn fontSize='inherit' /> LinkedIn
            </Typography>
          </a>
        </Typography>
        <Typography variant='body1' textAlign='center'>
          <a href='https://github.com/LucasGobatto' target='_blank' rel='noreferrer noopener'>
            <Typography variant='body1' fontWeight={600} color='primary.main'>
              <GitHub fontSize='inherit' /> GitHub
            </Typography>
          </a>
        </Typography>
        <Typography variant='body1' textAlign='center'>
          <a href='https://wa.me/5511962513489' target='_blank' rel='noreferrer noopener'>
            <Typography variant='body1' fontWeight={600} color='primary.main'>
              <WhatsApp fontSize='inherit' /> (11) 9 6251-3489
            </Typography>
          </a>
        </Typography>
        <Typography variant='body1' textAlign='center'>
          <a href='mailto:lucas.bisaio@live.com' target='_blank' rel='noreferrer noopener'>
            <Typography variant='body1' fontWeight={600} color='primary.main'>
              <Email fontSize='inherit' /> lucas.bisaio@live.com
            </Typography>
          </a>
        </Typography>
      </Grid>
    </Box>
  );
};
