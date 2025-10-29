import { useState } from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Calculator, ArrowRight } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  basePrice: number;
  multiplier: { small: number; medium: number; large: number; xl: number };
}

export default function QuoteCalculator() {
  const [vehicleSize, setVehicleSize] = useState<'small' | 'medium' | 'large' | 'xl'>('medium');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const services: Service[] = [
    {
      id: 'ceramic-pro',
      name: 'Ceramic Professional Coating',
      basePrice: 950,
      multiplier: { small: 1, medium: 1.15, large: 1.3, xl: 1.5 },
    },
    {
      id: 'graphene-pro',
      name: 'Graphene Professional Coating',
      basePrice: 1250,
      multiplier: { small: 1, medium: 1.15, large: 1.3, xl: 1.5 },
    },
    {
      id: 'paint-stage1',
      name: 'Stage 1 Paint Enhancement',
      basePrice: 660,
      multiplier: { small: 1, medium: 1.2, large: 1.4, xl: 1.6 },
    },
    {
      id: 'paint-stage2',
      name: 'Stage 2 Paint Correction',
      basePrice: 1100,
      multiplier: { small: 1, medium: 1.2, large: 1.4, xl: 1.6 },
    },
    {
      id: 'window-carbon',
      name: 'Carbon Window Tinting',
      basePrice: 400,
      multiplier: { small: 1, medium: 1.15, large: 1.25, xl: 1.4 },
    },
    {
      id: 'window-ceramic',
      name: 'Ceramic Window Tinting',
      basePrice: 650,
      multiplier: { small: 1, medium: 1.15, large: 1.25, xl: 1.4 },
    },
    {
      id: 'ppf-partial',
      name: 'Partial Front PPF',
      basePrice: 1200,
      multiplier: { small: 1, medium: 1.2, large: 1.35, xl: 1.5 },
    },
    {
      id: 'ppf-full',
      name: 'Full Front PPF',
      basePrice: 2500,
      multiplier: { small: 1, medium: 1.2, large: 1.35, xl: 1.5 },
    },
  ];

  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const calculateTotal = () => {
    return services
      .filter((service) => selectedServices.includes(service.id))
      .reduce((total, service) => {
        return total + service.basePrice * service.multiplier[vehicleSize];
      }, 0);
  };

  const total = calculateTotal();

  return (
    <Card className="w-full max-w-3xl mx-auto" data-testid="quote-calculator">
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-lg bg-primary/10">
            <Calculator className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold">Instant Quote Calculator</h3>
            <p className="text-foreground/60 text-sm">
              Select your vehicle size and services for an instant estimate
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-3">
          <Label className="text-base font-semibold">Vehicle Size</Label>
          <RadioGroup
            value={vehicleSize}
            onValueChange={(value: any) => setVehicleSize(value)}
            className="grid grid-cols-2 md:grid-cols-4 gap-3"
          >
            <div>
              <RadioGroupItem
                value="small"
                id="small"
                className="peer sr-only"
                data-testid="radio-vehicle-small"
              />
              <Label
                htmlFor="small"
                className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-card p-4 hover-elevate cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
              >
                <span className="font-semibold">Small</span>
                <span className="text-xs text-foreground/60">Hatch/Coupe</span>
              </Label>
            </div>
            <div>
              <RadioGroupItem
                value="medium"
                id="medium"
                className="peer sr-only"
                data-testid="radio-vehicle-medium"
              />
              <Label
                htmlFor="medium"
                className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-card p-4 hover-elevate cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
              >
                <span className="font-semibold">Medium</span>
                <span className="text-xs text-foreground/60">Sedan</span>
              </Label>
            </div>
            <div>
              <RadioGroupItem
                value="large"
                id="large"
                className="peer sr-only"
                data-testid="radio-vehicle-large"
              />
              <Label
                htmlFor="large"
                className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-card p-4 hover-elevate cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
              >
                <span className="font-semibold">Large</span>
                <span className="text-xs text-foreground/60">SUV/Wagon</span>
              </Label>
            </div>
            <div>
              <RadioGroupItem
                value="xl"
                id="xl"
                className="peer sr-only"
                data-testid="radio-vehicle-xl"
              />
              <Label
                htmlFor="xl"
                className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-card p-4 hover-elevate cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
              >
                <span className="font-semibold">XL</span>
                <span className="text-xs text-foreground/60">Large SUV</span>
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <Label className="text-base font-semibold">Select Services</Label>
          <div className="grid gap-3">
            {services.map((service) => (
              <div
                key={service.id}
                className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all hover-elevate ${
                  selectedServices.includes(service.id)
                    ? 'border-primary bg-primary/5'
                    : 'border-muted bg-card'
                }`}
                data-testid={`service-option-${service.id}`}
              >
                <div className="flex items-center gap-3 flex-1">
                  <Checkbox
                    id={service.id}
                    checked={selectedServices.includes(service.id)}
                    onCheckedChange={() => toggleService(service.id)}
                    data-testid={`checkbox-${service.id}`}
                  />
                  <Label htmlFor={service.id} className="cursor-pointer font-medium flex-1">
                    {service.name}
                  </Label>
                </div>
                <span className="text-primary font-semibold" data-testid={`price-${service.id}`}>
                  ${Math.round(service.basePrice * service.multiplier[vehicleSize])}
                </span>
              </div>
            ))}
          </div>
        </div>

        {selectedServices.length > 0 && (
          <div className="p-6 bg-primary/5 rounded-lg border-2 border-primary">
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-semibold">Estimated Total:</span>
              <span className="text-3xl font-bold text-primary" data-testid="total-price">
                ${Math.round(total).toLocaleString()}
              </span>
            </div>
            <p className="text-sm text-foreground/60">
              * Final price may vary based on vehicle condition and specific requirements
            </p>
          </div>
        )}
      </CardContent>

      <CardFooter>
        <Button
          className="w-full gap-2"
          size="lg"
          disabled={selectedServices.length === 0}
          onClick={() => {
            const serviceList = services
              .filter((s) => selectedServices.includes(s.id))
              .map((s) => s.name)
              .join(', ');
            alert(
              `Quote Request:\nVehicle: ${vehicleSize}\nServices: ${serviceList}\nEstimate: $${Math.round(total)}\n\nClick OK to contact us for booking!`
            );
          }}
          data-testid="button-request-quote"
        >
          Request Quote
          <ArrowRight className="w-5 h-5" />
        </Button>
      </CardFooter>
    </Card>
  );
}
