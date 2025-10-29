import ProcessTimeline from '../ProcessTimeline';

export default function ProcessTimelineExample() {
  const steps = [
    {
      stage: 'Stage 1',
      title: 'Enhancement',
      price: 'From $660',
      description:
        'Recommended for newer vehicles or if you\'re looking to enhance the finish of your car\'s paint. This stage can remove or reduce fine swirls and hazing.',
      items: [
        'Pre foam & full exterior wash',
        'Paint Clayed (to remove paint contaminants)',
        'Stage 1 machine polish',
        'Windows cleaned',
        'Tyres & Trims treated',
      ],
    },
    {
      stage: 'Stage 2',
      title: 'Paint Enhancement/Correction',
      price: 'From $1,100',
      description:
        'Stage 2 paint correction can remove or reduce light to mild swirls and scratches by 75-85% and improve the paints gloss and clarity.',
      items: [
        'Pre-foam & full exterior wash',
        'Paint Clayed',
        'Stage 2 machine polish',
        'Alcohol wipe down',
        'Application of ceramic spray sealant',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <ProcessTimeline steps={steps} />
      </div>
    </div>
  );
}
