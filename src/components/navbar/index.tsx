import { MenuOpen, Menu } from '@mui/icons-material';
import { Box, Drawer, drawerClasses, IconButton, styled, Theme, Typography, useMediaQuery } from '@mui/material';
import { useState } from 'react';

const NavbarItemStyled = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  color: 'white',
  textWrap: 'balance',
  cursor: 'pointer',
  padding: '8px 12px',

  [`${theme.breakpoints.up('sm')}`]: {
    flex: 1,
    color: theme.palette.grey[300],
  },
})) as typeof Typography;

const NavbarItem = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => {
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();

    const element = document.getElementById(href);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onClick?.();
    }
  };

  return (
    <NavbarItemStyled variant='navbar' component='a' href={`#${href}`} onClick={handleClick}>
      {children}
    </NavbarItemStyled>
  );
};

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const isMobile = useMediaQuery<Theme>(({ breakpoints }) => breakpoints.down('sm'));

  if (isMobile) {
    return (
      <>
        <Box
          width='100%'
          display='flex'
          flexDirection='row-reverse'
          padding='16px 32px'
          bgcolor={({ palette }) => palette.primary[500]}
        >
          <IconButton onClick={() => setOpen(true)}>
            {isOpen ? (
              <MenuOpen sx={{ color: 'white', width: '32px', height: '32px' }} />
            ) : (
              <Menu sx={{ color: 'white', width: '32px', height: '32px' }} />
            )}
          </IconButton>
        </Box>

        <Drawer
          open={isOpen}
          onClose={() => setOpen(false)}
          PaperProps={{ sx: { backgroundColor: 'primary.main', padding: '8px' } }}
        >
          <NavbarItem href='about' onClick={() => setOpen(false)}>
            Sobre mim
          </NavbarItem>
          <NavbarItem href='academic' onClick={() => setOpen(false)}>
            Formação acadêmica
          </NavbarItem>
          <NavbarItem href='experience' onClick={() => setOpen(false)}>
            Experiências
          </NavbarItem>
          <NavbarItem href='skills' onClick={() => setOpen(false)}>
            Skills
          </NavbarItem>
          <NavbarItem href='projects' onClick={() => setOpen(false)}>
            Projetos
          </NavbarItem>
          <NavbarItem href='contact' onClick={() => setOpen(false)}>
            Contatos
          </NavbarItem>
        </Drawer>
      </>
    );
  }

  return (
    <Box display='flex' gap='8px' padding='24px 32px' bgcolor={({ palette }) => palette.primary[500]}>
      <NavbarItem href='about'>Sobre mim</NavbarItem>
      <NavbarItem href='academic'>Formação acadêmica</NavbarItem>
      <NavbarItem href='experience'>Experiências</NavbarItem>
      <NavbarItem href='skills'>Skills</NavbarItem>
      <NavbarItem href='projects'>Projetos</NavbarItem>
      <NavbarItem href='contact'>Contatos</NavbarItem>
    </Box>
  );
};
