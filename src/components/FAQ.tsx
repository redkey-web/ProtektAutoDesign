'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
  variant?: 'light' | 'dark';
}

export default function FAQ({
  title = 'Frequently Asked Questions',
  subtitle = 'Find answers to common questions about our services',
  items,
  variant = 'light',
}: FAQProps) {
  const isDark = variant === 'dark';

  return (
    <section
      className={`py-16 sm:py-20 relative overflow-hidden ${isDark ? 'bg-[#0a0a0a]' : 'bg-muted'}`}
      data-testid="faq-section"
    >
      {/* Dark variant decorations */}
      {isDark && (
        <>
          {/* Pattern overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: 'url(/images/pattern-logo.png)',
              backgroundRepeat: 'repeat',
              backgroundSize: '80px 80px',
              backgroundAttachment: 'fixed',
            }}
            aria-hidden="true"
          />
          {/* Subtle glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
            <div className="w-[500px] h-[400px] bg-primary/8 rounded-full blur-[150px]" />
          </div>
          {/* Vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.5) 100%)',
            }}
            aria-hidden="true"
          />
        </>
      )}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className={`font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-foreground'}`}
            data-testid="faq-title"
          >
            {title}
          </h2>
          {subtitle && (
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-white/60' : 'text-muted-foreground'}`} data-testid="faq-subtitle">
              {subtitle}
            </p>
          )}
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className={`border rounded-md px-6 hover-elevate ${
                isDark
                  ? 'border-primary/20 bg-[#0e1729] [&_svg]:text-primary'
                  : 'border-border bg-white'
              }`}
              data-testid={`faq-item-${index}`}
            >
              <AccordionTrigger
                className={`text-left text-lg font-sans font-medium hover:text-primary transition-colors tracking-wide leading-relaxed ${
                  isDark ? 'text-white' : 'text-foreground'
                }`}
                data-testid={`faq-question-${index}`}
              >
                {item.question.toLowerCase()}
              </AccordionTrigger>
              <AccordionContent
                className={`leading-relaxed pt-2 ${isDark ? 'text-white/70' : 'text-muted-foreground'}`}
                data-testid={`faq-answer-${index}`}
              >
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className={`mb-4 ${isDark ? 'text-white/60' : 'text-muted-foreground'}`}>
            Still have questions?
          </p>
          <a
            href="tel:0286062842"
            className="text-primary hover:text-primary/80 font-semibold text-lg transition-colors"
            data-testid="link-faq-contact"
          >
            Call us at (02) 8606 2842
          </a>
        </div>
      </div>
    </section>
  );
}
