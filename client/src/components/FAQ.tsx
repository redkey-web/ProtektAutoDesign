import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import patternLogo from '@assets/image_1764055702258.png';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
}

export default function FAQ({
  title = 'Frequently Asked Questions',
  subtitle = 'Find answers to common questions about our services',
  items,
}: FAQProps) {
  return (
    <section className="py-16 sm:py-20 bg-background relative overflow-hidden" data-testid="faq-section">
      {/* Pattern Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `url(${patternLogo})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '60px 60px',
          backgroundAttachment: 'fixed',
          filter: 'invert(1)',
        }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
            data-testid="faq-title"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="faq-subtitle">
              {subtitle}
            </p>
          )}
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-md px-6 hover-elevate bg-white"
              data-testid={`faq-item-${index}`}
            >
              <AccordionTrigger
                className="text-left text-base font-semibold text-foreground hover:text-primary transition-colors"
                data-testid={`faq-question-${index}`}
              >
                {item.question}
              </AccordionTrigger>
              <AccordionContent
                className="text-muted-foreground leading-relaxed pt-2"
                data-testid={`faq-answer-${index}`}
              >
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
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
