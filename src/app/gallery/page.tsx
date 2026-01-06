import { Metadata } from 'next';
import GalleryContent from './GalleryContent';

export const metadata: Metadata = {
  title: 'Gallery | Premium Car Detailing Work | Protekt Auto Sydney',
  description:
    "View our premium car detailing and protection work. Ceramic coating, paint correction, PPF, window tinting gallery. Sydney's trusted automotive protection experts.",
  keywords:
    'car detailing gallery Sydney, ceramic coating photos, paint protection work, PPF installation Sydney, window tinting gallery',
  alternates: {
    canonical: 'https://protektauto.com.au/gallery',
  },
};

export default function Gallery() {
  return <GalleryContent />;
}
