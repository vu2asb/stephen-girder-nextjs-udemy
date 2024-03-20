import performanceImg from '/public/performance.jpg';
import Hero from '@/components/hero';

export default function PerformancePage() {
  return (
    <Hero 
      imgData={performanceImg} 
      imgAlt="performance image - welding" 
      title="We provide high performance applications"
    />
  );
}