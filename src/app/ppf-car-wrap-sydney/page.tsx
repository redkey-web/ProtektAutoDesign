import { Metadata } from 'next';
import PPFContent from './PPFContent';
import { FAQItem } from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'PPF Wrap Sydney | XPEL Paint Protection Film | From $1,750',
  description:
    'Expert XPEL PPF installation Sydney. Self-healing paint protection film from $1,750. Standard Front $1,750, Complete Front $2,600, Track Pack $3,500, Full Body $6,800. Call (02) 8606 2842',
  keywords:
    'ppf wrap sydney, xpel ppf sydney, ppf wrap cost, ppf sydney, ppf cost, paint protection film sydney, ppf installer sydney, stone chip protection sydney, clear bra sydney, ppf wrap price',
  alternates: {
    canonical: 'https://protektauto.com.au/ppf-car-wrap-sydney',
  },
};

const faqItems: FAQItem[] = [
  {
    question: 'How much does PPF cost in Sydney?',
    answer:
      'PPF pricing in Sydney varies based on coverage area. At Protekt Auto, our Standard Front Kit (bumper, bonnet edge, guards, mirrors) starts from $1,750. Complete Front Kit (full bonnet, full guards) starts from $2,600. Track Pack starts from $3,500, and Full Body PPF wrap starts from $6,800. Prices vary by vehicle size and complexity.',
  },
  {
    question: 'What is Paint Protection Film (PPF)?',
    answer:
      "PPF is a transparent, thermoplastic urethane film applied to your vehicle's painted surfaces. It provides a protective barrier against stone chips, scratches, bug splatter, and environmental damage while maintaining your paint's original appearance.",
  },
  {
    question: 'Does PPF really self-heal?',
    answer:
      'Yes! Our premium PPF features heat-activated self-healing technology. Minor scratches and swirl marks disappear when exposed to heat (from the sun or warm water), keeping your film looking pristine. Deeper cuts or gouges that penetrate through the film cannot self-heal.',
  },
  {
    question: 'How long does PPF last?',
    answer:
      'Quality PPF typically lasts 7-10 years with proper care and maintenance. Our films come with manufacturer warranties and resist yellowing, cracking, and peeling throughout their lifespan.',
  },
  {
    question: 'Can PPF be removed?',
    answer:
      'Yes, PPF can be professionally removed without damaging your paint. In fact, when removed, your paint underneath will look as good as the day it was applied, as it has been protected from the elements.',
  },
  {
    question: 'What coverage option should I choose?',
    answer:
      'It depends on your needs and budget. Partial Front is great for basic protection, Full Front is our most popular choice for comprehensive coverage of high-impact areas, Track Pack is ideal for performance driving, and Full Body provides maximum protection for the entire vehicle. We can help you decide based on your vehicle use.',
  },
];

const coverageOptions = [
  {
    name: 'Standard Front Kit',
    areas: ['Front bumper bar', 'Bonnet leading edge', 'Front guards', 'Side mirrors'],
    price: 'From $1,750',
  },
  {
    name: 'Complete Front Kit',
    areas: ['Front bumper', 'Full bonnet', 'Full front guards', 'Side mirrors'],
    price: 'From $2,600',
    popular: true,
  },
  {
    name: 'Track Pack',
    areas: [
      'Full front kit coverage',
      'Side sills',
      'A-pillars',
      'Leading edge of roof',
      'Partial lower wheel arch (behind rear wheel)',
    ],
    price: 'From $3,500',
  },
  {
    name: 'Full Sides',
    areas: ['Side doors (x4)', 'Front guards', 'Rocker panels', 'Rear guards', 'Top cant rails'],
    price: 'From $3,800',
  },
  {
    name: 'Wear & Tear Kit',
    areas: ['Door cups', 'Door edges', 'Top of rear bumper strip', 'Inner door sill strips'],
    price: 'From $550',
  },
  {
    name: 'Full Wraps',
    areas: ['All exterior painted panels', 'Complete vehicle coverage', 'Maximum protection'],
    price: 'From $6,800',
  },
];

// Featured PPF work - prominent display
const featuredPPFWork = {
  featured: {
    src: '/images/ppf-porsche-gt3.png',
    alt: 'Porsche GT3 with complete PPF protection',
    title: 'Porsche GT3',
    subtitle: 'Complete PPF Package - Full Body Protection',
  },
  grid: [
    { src: '/images/ppf-white-porsche.png', alt: 'PPF application on white Porsche', title: 'Porsche 911', subtitle: 'Front End Protection' },
    { src: '/images/ppf-blue-mustang.png', alt: 'Blue Ford Mustang PPF installation', title: 'Ford Mustang', subtitle: 'Full Front Kit' },
    { src: '/images/ppf-bmw-workshop.png', alt: 'BMW PPF installation in workshop', title: 'BMW', subtitle: 'Workshop Installation' },
    { src: '/images/ppf-blue-golf-r.png', alt: 'Blue Volkswagen Golf R', title: 'Volkswagen Golf R', subtitle: 'Front Protection' },
  ],
};

// More PPF work - process and detail shots
const morePPFImages = [
  { src: '/images/ppf-blue-hood.png', alt: 'PPF application on blue car hood', title: 'Wet Installation', subtitle: 'Professional Technique' },
  { src: '/images/ppf-red-car-heatgun.png', alt: 'Technician heat-forming PPF', title: 'Heat-Forming', subtitle: 'Expert Application' },
  { src: '/images/ppf-squeegee.png', alt: 'Professional squeegee technique', title: 'Squeegee Work', subtitle: 'Bubble-Free Finish' },
  { src: '/images/ppf-closeup.png', alt: 'Close-up of PPF application', title: 'Precision Detail', subtitle: 'Clean Edges' },
  { src: '/images/ppf-mercedes-wheel.png', alt: 'Mercedes-Benz detail', title: 'Mercedes-Benz', subtitle: 'Premium Protection' },
  { src: '/images/ppf-silver-s2000.png', alt: 'Silver Honda S2000', title: 'Honda S2000', subtitle: 'Classic Protection' },
];

export default function PPFPage() {
  return (
    <PPFContent
      faqItems={faqItems}
      coverageOptions={coverageOptions}
      featuredPPFWork={featuredPPFWork}
      morePPFImages={morePPFImages}
    />
  );
}
