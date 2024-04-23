import homeImg from '../../public/home.jpg';
import MaintenanceImg from '../../public/WordPress-Maintenance.svg';
import Hero from '@/components/hero';

export default function Home() {
  return (
    <>
    <Hero 
      imgData={MaintenanceImg} 
      imgAlt="home page image" 
      title="We are under maintenance...Will be back soon!"
    />
    
    </>
  );
}
