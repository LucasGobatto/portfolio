import { Navbar } from '@components/navbar';
import { Box } from '@mui/material';
import { ResumeSection } from './sections/resume';
import { AboutMeSection } from './sections/about-me';
import { AcademicSection } from './sections/academic';
import { ProfessionalSection } from './sections/profissional';

export const HomePage = () => {
  return (
    <Box height='100%' bgcolor={({ palette }) => palette.grey[300]}>
      <Navbar />
      <ResumeSection />
      <AboutMeSection />
      <AcademicSection />
      <ProfessionalSection />
    </Box>
  );
};
