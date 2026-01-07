import { Clock, TrendingUp } from 'lucide-react';

interface UrgencyBannerProps {
  message: string;
  highlight?: string;
  icon?: 'clock' | 'trending';
  variant?: 'default' | 'dark';
}

export default function UrgencyBanner({
  message,
  highlight,
  icon = 'clock',
  variant = 'default',
}: UrgencyBannerProps) {
  const Icon = icon === 'clock' ? Clock : TrendingUp;
  const isDark = variant === 'dark';

  return (
    <div
      className={`rounded-lg p-4 flex items-center gap-3 hover-elevate transition-all ${
        isDark
          ? 'bg-white/5 border border-white/10'
          : 'bg-primary/10 border border-primary/30'
      }`}
      data-testid="urgency-banner"
    >
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
      </div>
      <div className="flex-1">
        <p className={`font-medium ${isDark ? 'text-white' : 'text-foreground'}`}>
          {message}
          {highlight && (
            <span className="text-primary font-semibold ml-1">{highlight}</span>
          )}
        </p>
      </div>
    </div>
  );
}
