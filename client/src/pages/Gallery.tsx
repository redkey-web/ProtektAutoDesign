import SEO from '@/components/SEO';
import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import all gallery images
import windowTintTeam from '@assets/window tint_1764036060927.webp';
import ceramicCoating1 from '@assets/Ceramic coating service Sydney - New Car Protection_1761915866845.webp';
import ceramicCoating2 from '@assets/Ceramic coating service Sydney - New Car Protection_1763295133288.webp';
import fullPackages from '@assets/Full packages Protekt Auto_1763295209283.webp';
import motorcycleProtection from '@assets/Motorcycle ceramic coat protection sydney_1763343837693.webp';
import paintCorrection from '@assets/Paint correction_1763294797362.webp';
import ppfProtection from '@assets/PPF _1763343626090.webp';
import windowTinting from '@assets/Windown tinting_1763343495843.webp';
import ramShowroom from '@assets/image_1764072936497.png';
import teslaWhite from '@assets/image_1764072963008.png';
import workshopAction from '@assets/image_1764072995131.png';
import camrySide from '@assets/image_1764073032097.png';
import camryRear from '@assets/image_1764073128235.png';
import redKiaStinger from '@assets/image_1764078183711.png';
import blueMazdaCX5 from '@assets/image_1764078215963.png';
import silverPajero from '@assets/image_1764078270132.png';
import blackMinivan from '@assets/image_1764078290137.png';
import blueAMG from '@assets/image_1764078337288.png';
import blueBMWM3 from '@assets/image_1764078350610.png';
import coatingApplication from '@assets/image_1764078403000.png';
import ppfBlueHood from '@assets/image_1764078701691.png';
import ppfMercedesWheel from '@assets/image_1764078688742.png';
import ppfRedCarHeatGun from '@assets/image_1764078670534.png';
import ppfBlueMustangLift from '@assets/image_1764078653120.png';
import ppfBlackCarSqueegee from '@assets/image_1764078620864.png';
import ppfWhitePorsche from '@assets/image_1764078599443.png';
import ppfPorscheGT3 from '@assets/image_1764078577631.png';
import ppfApplicationCloseup from '@assets/image_1764078535126.png';
import ppfBMWWorkshop from '@assets/image_1764078523774.png';
import ppfBlueGolfR from '@assets/image_1764078505288.png';
import ppfSilverS2000 from '@assets/image_1764078467974.png';
import blueSubaruPolish from '@assets/image_1764078880441.png';
import redCarRoofPolish from '@assets/image_1764078911061.png';
import whiteLamborghini from '@assets/image_1764079097517.png';
import greenAMGGTR from '@assets/image_1764079112946.png';
import redFerrari488 from '@assets/image_1764079158599.png';
import blackLamborghiniGallardo from '@assets/image_1764079173185.png';
import redPorscheGT2RS from '@assets/image_1764079188912.png';
import blackDucati900 from '@assets/image_1764079206025.png';
import orangeHarley from '@assets/image_1764079222888.png';
import taillightDetail from '@assets/image_1764079236797.png';
import silverPajero2 from '@assets/image_1764079248918.png';
import whiteSubaruSTI from '@assets/image_1764079281717.png';
import whiteHonda from '@assets/image_1764079557269.png';
import blackDucatiSide from '@assets/image_1764079593202.png';
import blackDucatiRear from '@assets/image_1764079603369.png';
import burgundyHarley from '@assets/image_1764079613406.png';
import orangeHarleyShop from '@assets/image_1764079622210.png';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: windowTintTeam,
    alt: 'Professional window tinting application - Protekt Auto team at work',
    category: 'Team at Work',
  },
  {
    src: workshopAction,
    alt: 'Expert technician applying window tint in our Sydney workshop',
    category: 'Team at Work',
  },
  {
    src: blueSubaruPolish,
    alt: 'Technician polishing blue Subaru with professional machine polisher',
    category: 'Team at Work',
  },
  {
    src: redCarRoofPolish,
    alt: 'Expert polishing red car roof with Rupes machine for ceramic coating prep',
    category: 'Team at Work',
  },
  {
    src: whiteLamborghini,
    alt: 'White Lamborghini Huracan showcasing flawless paint correction results',
    category: 'Paint Correction',
  },
  {
    src: redFerrari488,
    alt: 'Red Ferrari 488 paint correction service in professional workshop',
    category: 'Paint Correction',
  },
  {
    src: blackLamborghiniGallardo,
    alt: 'Black Lamborghini Gallardo with mirror finish outside Protekt Auto',
    category: 'Paint Correction',
  },
  {
    src: redPorscheGT2RS,
    alt: 'Red Porsche GT2 RS professional paint correction and detailing',
    category: 'Paint Correction',
  },
  {
    src: whiteSubaruSTI,
    alt: 'White Subaru WRX STI paint correction for track-ready finish',
    category: 'Paint Correction',
  },
  {
    src: taillightDetail,
    alt: 'Precision detail work showcasing perfect paint correction finish',
    category: 'Paint Correction',
  },
  {
    src: blackDucati900,
    alt: 'Black Ducati 900 motorcycle detailing and paint correction',
    category: 'Motorcycle',
  },
  {
    src: orangeHarley,
    alt: 'Harley-Davidson motorcycle receiving premium care at Protekt Auto',
    category: 'Motorcycle',
  },
  {
    src: whiteHonda,
    alt: 'White Honda sportbike with professional ceramic coating protection',
    category: 'Motorcycle',
  },
  {
    src: blackDucatiSide,
    alt: 'Black Ducati 900 SD motorcycle complete protection package',
    category: 'Motorcycle',
  },
  {
    src: blackDucatiRear,
    alt: 'Black Ducati 900 SD rear view showcasing premium ceramic finish',
    category: 'Motorcycle',
  },
  {
    src: burgundyHarley,
    alt: 'Burgundy Harley-Davidson professional detailing in workshop',
    category: 'Motorcycle',
  },
  {
    src: orangeHarleyShop,
    alt: 'Harley-Davidson motorcycle outside Protekt Auto Sydney workshop',
    category: 'Motorcycle',
  },
  {
    src: silverPajero2,
    alt: 'Mitsubishi Pajero complete detailing and protection package',
    category: 'Full Packages',
  },
  {
    src: ceramicCoating1,
    alt: 'Premium ceramic coating service for new car protection',
    category: 'Ceramic Coating',
  },
  {
    src: ceramicCoating2,
    alt: 'Graphene ceramic coating application process',
    category: 'Ceramic Coating',
  },
  {
    src: redKiaStinger,
    alt: 'Red Kia Stinger with ceramic coating under heat lamps in workshop',
    category: 'Ceramic Coating',
  },
  {
    src: blueMazdaCX5,
    alt: 'Blue Mazda CX-5 receiving ceramic coating in modern workshop',
    category: 'Ceramic Coating',
  },
  {
    src: silverPajero,
    alt: 'Silver Mitsubishi Pajero with fresh ceramic coating',
    category: 'Ceramic Coating',
  },
  {
    src: blackMinivan,
    alt: 'Black minivan showcasing mirror-like ceramic coating finish',
    category: 'Ceramic Coating',
  },
  {
    src: blueAMG,
    alt: 'Blue Mercedes-Benz AMG with premium ceramic coating',
    category: 'Ceramic Coating',
  },
  {
    src: blueBMWM3,
    alt: 'Light blue BMW M3 with ceramic coating at night',
    category: 'Ceramic Coating',
  },
  {
    src: coatingApplication,
    alt: 'Professional technician applying ceramic coating to vehicle',
    category: 'Team at Work',
  },
  {
    src: paintCorrection,
    alt: 'Paint correction and polishing service',
    category: 'Paint Correction',
  },
  {
    src: windowTinting,
    alt: 'Ceramic window tinting installation',
    category: 'Window Tinting',
  },
  {
    src: ramShowroom,
    alt: 'RAM 1500 TRX with professional ceramic window tinting in modern showroom',
    category: 'Window Tinting',
  },
  {
    src: teslaWhite,
    alt: 'White Tesla Model 3 showcasing premium ceramic window tint',
    category: 'Window Tinting',
  },
  {
    src: camrySide,
    alt: 'Toyota Camry Hybrid with professional window tinting application',
    category: 'Window Tinting',
  },
  {
    src: camryRear,
    alt: 'Toyota Camry showing completed window tint installation',
    category: 'Window Tinting',
  },
  {
    src: ppfProtection,
    alt: 'Paint protection film (PPF) application',
    category: 'PPF',
  },
  {
    src: ppfBlueHood,
    alt: 'PPF application on blue car hood with wet installation technique',
    category: 'PPF',
  },
  {
    src: ppfMercedesWheel,
    alt: 'Mercedes-Benz wheel detail with PPF protection',
    category: 'PPF',
  },
  {
    src: ppfRedCarHeatGun,
    alt: 'Technician heat-forming PPF on red vehicle',
    category: 'Team at Work',
  },
  {
    src: ppfBlueMustangLift,
    alt: 'Blue Ford Mustang receiving PPF installation on workshop lift',
    category: 'PPF',
  },
  {
    src: ppfBlackCarSqueegee,
    alt: 'Professional squeegee technique for PPF application',
    category: 'Team at Work',
  },
  {
    src: ppfWhitePorsche,
    alt: 'Expert applying PPF to white Porsche front end',
    category: 'Team at Work',
  },
  {
    src: ppfPorscheGT3,
    alt: 'Porsche GT3 with complete PPF protection package',
    category: 'PPF',
  },
  {
    src: ppfApplicationCloseup,
    alt: 'Close-up of PPF application process showing wet installation',
    category: 'Team at Work',
  },
  {
    src: ppfBMWWorkshop,
    alt: 'BMW receiving PPF installation in premium workshop',
    category: 'PPF',
  },
  {
    src: ppfBlueGolfR,
    alt: 'Blue Volkswagen Golf R front bumper PPF detail',
    category: 'PPF',
  },
  {
    src: ppfSilverS2000,
    alt: 'Silver Honda S2000 convertible with PPF protection',
    category: 'PPF',
  },
  {
    src: motorcycleProtection,
    alt: 'Motorcycle ceramic coating protection',
    category: 'Motorcycle',
  },
  {
    src: fullPackages,
    alt: 'Complete protection packages for luxury vehicles',
    category: 'Full Packages',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];

  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="min-h-screen">
      <SEO
        title="Gallery | Premium Car Detailing Work | Protekt Auto Sydney"
        description="View our premium car detailing and protection work. Ceramic coating, paint correction, PPF, window tinting gallery. Sydney's trusted automotive protection experts."
        keywords="car detailing gallery Sydney, ceramic coating photos, paint protection work, PPF installation Sydney, window tinting gallery"
        canonical="https://protektauto.com.au/gallery"
      />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${ceramicCoating1})` }}
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
            OUR WORK
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Showcasing our premium automotive detailing and protection services
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? 'default' : 'outline'}
                onClick={() => setFilter(category)}
                className="transition-all"
                data-testid={`button-filter-${category.toLowerCase().replace(' ', '-')}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-md cursor-pointer hover-elevate active-elevate-2 transition-all"
                onClick={() => setSelectedImage(image)}
                data-testid={`gallery-image-${index}`}
              >
                <div className="aspect-[4/3] overflow-hidden bg-black">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                decoding="async"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm font-medium mb-1">{image.category}</p>
                    <p className="text-xs text-white/80 line-clamp-2">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-foreground/60 text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          data-testid="lightbox-modal"
        >
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-4 right-4 text-white hover:text-white/80 z-10"
            onClick={() => setSelectedImage(null)}
            data-testid="button-close-lightbox"
          >
            <X className="w-6 h-6" />
          </Button>
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <p className="font-medium mb-1">{selectedImage.category}</p>
              <p className="text-sm text-white/80">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
