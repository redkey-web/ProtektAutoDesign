import Hero from '../Hero';
import heroImage from '@assets/generated_images/Ceramic_coating_hero_image_2e9cd7e0.png';

export default function HeroExample() {
  return (
    <Hero
      title="Sydney's #1 Paint Protection"
      subtitle="Premium Ceramic Coating"
      description="Protect your vehicle's finish with our industry-leading ceramic coatings and paint protection films"
      image={heroImage}
      ctaText="View Services"
      secondaryCtaText="Call Us"
      showPlayButton={true}
    />
  );
}
