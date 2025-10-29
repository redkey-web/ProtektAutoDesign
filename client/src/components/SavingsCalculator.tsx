import { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { TrendingUp, DollarSign, Sun, Thermometer } from 'lucide-react';

export default function SavingsCalculator() {
  const [avgTemp, setAvgTemp] = useState(30);
  const [drivingHours, setDrivingHours] = useState(2);
  const [fuelPrice, setFuelPrice] = useState(1.8);

  // Calculations based on industry data
  const heatReduction = 65; // Ceramic film average
  const acEfficiencyLoss = 0.2; // 20% AC usage increase from heat
  const avgFuelConsumption = 10; // L/100km
  const acFuelIncrease = 0.15; // 15% more fuel for AC

  const calculateSavings = () => {
    // Annual driving estimate
    const daysPerYear = 365;
    const kmPerDay = drivingHours * 50; // Average speed
    const totalKmPerYear = kmPerDay * daysPerYear;

    // Fuel consumption without tint
    const baseFuelUsage = (totalKmPerYear / 100) * avgFuelConsumption;
    const acExtraFuel = baseFuelUsage * acFuelIncrease;

    // With tint (65% heat reduction = ~50% less AC usage)
    const tintFuelSavings = acExtraFuel * 0.5;
    const annualSavings = tintFuelSavings * fuelPrice;

    // UV damage prevention value
    const interiorProtectionValue = 500; // Per year in prevented fading/cracking

    // Comfort hours
    const comfortHoursPerYear = daysPerYear * drivingHours;

    return {
      fuelSavings: Math.round(annualSavings),
      interiorProtection: interiorProtectionValue,
      totalAnnualSavings: Math.round(annualSavings + interiorProtectionValue),
      fiveYearSavings: Math.round((annualSavings + interiorProtectionValue) * 5),
      comfortHours: comfortHoursPerYear,
      uvBlocked: 99,
      heatReduced: heatReduction,
    };
  };

  const savings = calculateSavings();

  return (
    <div className="w-full max-w-4xl mx-auto" data-testid="savings-calculator">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 rounded-lg bg-primary/10">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold">Window Tint Savings Calculator</h3>
              <p className="text-foreground/60 text-sm">
                See how much you can save with premium window tinting
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <Label className="text-sm font-medium">
                Average Temperature: {avgTemp}°C
              </Label>
              <Slider
                value={[avgTemp]}
                onValueChange={(value) => setAvgTemp(value[0])}
                min={15}
                max={45}
                step={1}
                data-testid="slider-temperature"
              />
              <p className="text-xs text-foreground/60">Sydney avg: 22-30°C</p>
            </div>

            <div className="space-y-3">
              <Label className="text-sm font-medium">
                Daily Driving Hours: {drivingHours}h
              </Label>
              <Slider
                value={[drivingHours]}
                onValueChange={(value) => setDrivingHours(value[0])}
                min={0.5}
                max={8}
                step={0.5}
                data-testid="slider-driving-hours"
              />
              <p className="text-xs text-foreground/60">Average: 1-3 hours</p>
            </div>

            <div className="space-y-3">
              <Label className="text-sm font-medium">
                Fuel Price: ${fuelPrice.toFixed(2)}/L
              </Label>
              <Slider
                value={[fuelPrice]}
                onValueChange={(value) => setFuelPrice(value[0])}
                min={1.2}
                max={2.5}
                step={0.1}
                data-testid="slider-fuel-price"
              />
              <p className="text-xs text-foreground/60">Current Sydney avg</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-primary/5 border-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <DollarSign className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-foreground/60 mb-1">Annual Savings</p>
                    <p className="text-4xl font-bold text-primary mb-2" data-testid="annual-savings">
                      ${savings.totalAnnualSavings}
                    </p>
                    <div className="space-y-1 text-sm text-foreground/60">
                      <p>• Fuel savings: ${savings.fuelSavings}</p>
                      <p>• Interior protection: ${savings.interiorProtection}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-foreground/60 mb-1">5-Year Savings</p>
                    <p className="text-4xl font-bold text-foreground mb-2" data-testid="five-year-savings">
                      ${savings.fiveYearSavings}
                    </p>
                    <p className="text-sm text-foreground/60">
                      Investment pays for itself in less than 2 years
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="hover-elevate">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sun className="w-6 h-6 text-primary" />
                </div>
                <p className="text-3xl font-bold text-primary mb-1">{savings.uvBlocked}%</p>
                <p className="text-sm text-foreground/60">UV Rays Blocked</p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Thermometer className="w-6 h-6 text-primary" />
                </div>
                <p className="text-3xl font-bold text-primary mb-1">{savings.heatReduced}%</p>
                <p className="text-sm text-foreground/60">Heat Reduction</p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <p className="text-3xl font-bold text-primary mb-1">{savings.comfortHours}</p>
                <p className="text-sm text-foreground/60">Comfort Hours/Year</p>
              </CardContent>
            </Card>
          </div>

          <div className="p-6 bg-card rounded-lg border border-border">
            <h4 className="font-semibold mb-3">Additional Benefits</h4>
            <ul className="grid md:grid-cols-2 gap-2 text-sm text-foreground/70">
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Prevents interior fading and cracking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Reduces eye strain and fatigue</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Increases privacy and security</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Enhances vehicle appearance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Helps maintain resale value</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Protects against skin damage</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
