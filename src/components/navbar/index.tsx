import { Box, styled, Typography } from '@mui/material';

const NavbarItem = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[300],
  flex: 1,
  textAlign: 'center',
  textWrap: 'balance',
  cursor: 'pointer',
}));

export const Navbar = () => {
  return (
    <Box display='flex' gap='8px' padding='24px 32px' bgcolor={({ palette }) => palette.primary[500]}>
      <NavbarItem variant='navbar'>Sobre mim</NavbarItem>
      <NavbarItem variant='navbar'>Formação acadêmica</NavbarItem>
      <NavbarItem variant='navbar'>Experiências</NavbarItem>
      <NavbarItem variant='navbar'>Contatos</NavbarItem>
    </Box>
  );
};
