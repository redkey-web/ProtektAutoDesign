import PricingCard from '../PricingCard';

export default function PricingCardExample() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-sm">
        <PricingCard
          name="Graphene Professional"
          price="From $1,250"
          guarantee="7-year guarantee"
          popular={true}
          features={[
            'Enhanced graphene nanoparticle coating',
            'Intense, deeper gloss finish',
            'Superior corrosion resistance',
            '2.5 hours machine polishing included',
            'Significantly more durable',
            'Easier maintenance and cleaning',
          ]}
        />
      </div>
    </div>
  );
}
