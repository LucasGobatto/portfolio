import { Box, Typography, useTheme } from '@mui/material';

const NavbarItem = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const { palette } = useTheme();

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();

    const element = document.getElementById(href);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Typography
      variant='navbar'
      component='a'
      href={`#${href}`}
      flex={1}
      textAlign='center'
      color={palette.grey[300]}
      onClick={handleClick}
      sx={{ textWrap: 'balance', cursor: 'pointer' }}
    >
      {children}
    </Typography>
  );
};

export const Navbar = () => {
  return (
    <Box display='flex' gap='8px' padding='24px 32px' bgcolor={({ palette }) => palette.primary[500]}>
      <NavbarItem href='about'>Sobre mim</NavbarItem>
      <NavbarItem href='academic'>Formação acadêmica</NavbarItem>
      <NavbarItem href='experience'>Experiências</NavbarItem>
      <NavbarItem href='contact'>Contatos</NavbarItem>
    </Box>
  );
};
