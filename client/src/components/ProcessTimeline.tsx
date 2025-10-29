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
}

export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="space-y-6" data-testid="process-timeline">
      {steps.map((step, index) => (
        <Card
          key={index}
          className="hover-elevate active-elevate-2 transition-all duration-300"
          data-testid={`card-timeline-step-${index}`}
        >
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <Badge
                variant="outline"
                className="w-fit text-lg px-4 py-2 border-primary text-primary"
                data-testid={`badge-stage-${index}`}
              >
                {step.stage}
              </Badge>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3
                    className="font-display text-xl font-bold text-foreground"
                    data-testid={`text-step-title-${index}`}
                  >
                    {step.title}
                  </h3>
                  {step.price && (
                    <span
                      className="text-2xl font-bold text-primary"
                      data-testid={`text-step-price-${index}`}
                    >
                      {step.price}
                    </span>
                  )}
                </div>

                <p
                  className="text-foreground/70 mb-4"
                  data-testid={`text-step-description-${index}`}
                >
                  {step.description}
                </p>

                {step.items && step.items.length > 0 && (
                  <ul className="space-y-2">
                    {step.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-2 text-sm text-foreground/60"
                        data-testid={`list-item-${index}-${itemIndex}`}
                      >
                        <span className="text-primary mt-0.5">•</span>
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
