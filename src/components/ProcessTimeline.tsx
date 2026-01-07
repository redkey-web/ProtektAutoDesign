import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TimelineStep {
  stage: string;
  title: string;
  description: string;
  price?: string;
  items?: string[];
}

interface ProcessTimelineProps {
  steps: TimelineStep[];
  variant?: 'default' | 'dark' | 'gold';
}

export default function ProcessTimeline({ steps, variant = 'default' }: ProcessTimelineProps) {
  const isDark = variant === 'dark';
  const isGold = variant === 'gold';

  // Color classes based on variant
  const accentColor = isGold ? 'amber-500' : 'primary';
  const cardBg = isDark || isGold ? 'bg-black/40 border-white/10 backdrop-blur-sm' : '';
  const textColor = isDark || isGold ? 'text-white' : 'text-foreground';
  const textMuted = isDark || isGold ? 'text-white/70' : 'text-foreground/70';
  const textSubtle = isDark || isGold ? 'text-white/60' : 'text-foreground/60';
  const badgeClass = isGold
    ? 'border-amber-500 text-amber-500'
    : isDark
    ? 'border-primary text-primary'
    : 'border-primary text-primary';
  const priceColor = isGold ? 'text-amber-500' : 'text-primary';
  const bulletColor = isGold ? 'text-amber-500' : 'text-primary';

  return (
    <div className="space-y-6" data-testid="process-timeline">
      {steps.map((step, index) => (
        <Card
          key={index}
          className={`hover-elevate active-elevate-2 transition-all duration-300 ${cardBg}`}
          data-testid={`card-timeline-step-${index}`}
        >
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <Badge
                variant="outline"
                className={`w-fit text-lg px-4 py-2 ${badgeClass}`}
                data-testid={`badge-stage-${index}`}
              >
                {step.stage}
              </Badge>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3
                    className={`font-display text-xl font-bold ${textColor}`}
                    data-testid={`text-step-title-${index}`}
                  >
                    {step.title}
                  </h3>
                  {step.price && (
                    <span
                      className={`text-2xl font-bold ${priceColor}`}
                      data-testid={`text-step-price-${index}`}
                    >
                      {step.price}
                    </span>
                  )}
                </div>

                <p
                  className={`${textMuted} mb-4`}
                  data-testid={`text-step-description-${index}`}
                >
                  {step.description}
                </p>

                {step.items && step.items.length > 0 && (
                  <ul className="space-y-2">
                    {step.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className={`flex items-start gap-2 text-sm ${textSubtle}`}
                        data-testid={`list-item-${index}-${itemIndex}`}
                      >
                        <span className={`${bulletColor} mt-0.5`}>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
