import { Metadata } from 'next';
import WindowTintingContent from './WindowTintingContent';
import { FAQItem } from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'XPEL Window Tinting Sydney | Ceramic Tint Parramatta | From $160',
  description:
    'Authorised XPEL dealer for car window tinting in Sydney & Parramatta. PRIME CS, XR & XR PLUS ceramic films. Computer-cut precision, 99% UV block, lifetime warranty. From $160. Call (02) 8606 2842',
  keywords:
    'xpel window tinting sydney, window tinting sydney, ceramic tint sydney, xpel prime xr, car window tinting parramatta, darkest legal window tint nsw, xpel authorised dealer sydney',
  alternates: {
    canonical: 'https://protektauto.com.au/window-tinting-sydney',
  },
};

const faqItems: FAQItem[] = [
  {
    question: 'What is the darkest legal window tint in NSW?',
    answer:
      'In NSW, the darkest legal tint for front side windows is 35% VLT (Visible Light Transmission), meaning at least 35% of light must pass through. Rear side windows and the back windscreen can be any darkness, including 5% (limo tint). The windscreen can only have a visor strip on the top 10%. We offer 35% ceramic tint for front windows and darker options for rear windows while keeping you fully road legal.',
  },
  {
    question: 'Is window tinting legal in NSW?',
    answer:
      'Yes, window tinting is legal in NSW with specific regulations. The front side windows must allow at least 35% of light through, and the windscreen can only have tint on the top 10% (visor strip). The rear windows and back windscreen can be darker. All our tints comply with NSW regulations.',
  },
  {
    question: 'How long does window tinting take?',
    answer:
      'A full vehicle tint typically takes 2-4 hours depending on the vehicle size and complexity. The tint needs to cure for 2-3 days before you can wind down the windows or clean them.',
  },
  {
    question: "What's the difference between carbon and ceramic tint?",
    answer:
      'Carbon tint offers excellent heat rejection and UV protection at a great value. Ceramic tint provides superior heat rejection (up to 50% more than carbon), better clarity, no signal interference, and longer-lasting performance. Ceramic is our premium option for maximum comfort and protection.',
  },
  {
    question: 'Will tinting affect my GPS, phone, or radio signals?',
    answer:
      "Our ceramic tints are completely signal-friendly and won't interfere with GPS, mobile phones, or radio signals. Some metallic tints can cause interference, which is why we recommend ceramic films for the best performance.",
  },
  {
    question: 'How do I maintain my window tint?',
    answer:
      "Wait 2-3 days after installation before cleaning. Use a soft cloth with mild soap and water or ammonia-free glass cleaner. Avoid abrasive materials and harsh chemicals. Don't wind windows down for the first 2-3 days to allow proper curing.",
  },
];

export default function WindowTinting() {
  return <WindowTintingContent faqItems={faqItems} />;
}
