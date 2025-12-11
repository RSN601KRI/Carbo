import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollAnimate } from '@/components/ScrollAnimate';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'What are carbon credits?',
          a: 'Carbon credits are certificates representing the reduction or removal of one tonne of carbon dioxide (CO₂) from the atmosphere. When you purchase a carbon credit, you are funding projects that actively reduce greenhouse gas emissions.',
        },
        {
          q: 'How does carbon offsetting work?',
          a: 'Carbon offsetting allows individuals and businesses to compensate for their emissions by funding projects that reduce CO₂ elsewhere. For example, if you emit 10 tonnes of CO₂ annually, you can purchase 10 carbon credits to offset that impact.',
        },
        {
          q: 'Is carbon offsetting effective?',
          a: 'Yes, when done through verified projects. Our projects are certified by recognized standards like VERRA, ensuring that the carbon reductions are real, measurable, and permanent. However, offsetting should complement—not replace—direct emission reduction efforts.',
        },
      ],
    },
    {
      category: 'Verification',
      questions: [
        {
          q: 'What is VERRA certification?',
          a: 'VERRA is the world\'s leading carbon credit standard. Projects certified by VERRA undergo rigorous third-party audits to verify that they genuinely reduce or remove greenhouse gas emissions according to established methodologies.',
        },
        {
          q: 'How do you verify project impact?',
          a: 'All projects on Carbo undergo multiple levels of verification: initial project validation, ongoing monitoring, and periodic audits by accredited third-party auditors. We only list projects that meet our strict quality criteria.',
        },
        {
          q: 'What are SDG goals?',
          a: 'SDG stands for Sustainable Development Goals, a set of 17 global goals established by the United Nations. Many carbon projects contribute to multiple SDGs beyond climate action, such as clean energy, poverty reduction, and biodiversity protection.',
        },
      ],
    },
    {
      category: 'Purchasing',
      questions: [
        {
          q: 'How do I purchase carbon credits?',
          a: 'Simply browse our marketplace, select a project, add credits to your cart, and complete checkout. Each credit represents one tonne of CO₂. You\'ll receive a certificate confirming your purchase and contribution.',
        },
        {
          q: 'What happens after I purchase?',
          a: 'After purchase, you\'ll receive immediate confirmation and can track your order. The credits are retired on your behalf, meaning they cannot be resold. You\'ll also receive updates about your chosen project\'s progress.',
        },
        {
          q: 'Can I get a refund?',
          a: 'Due to the nature of carbon credits (they are retired upon purchase), we cannot offer refunds for completed purchases. Please review your selection carefully before checkout.',
        },
      ],
    },
    {
      category: 'Business',
      questions: [
        {
          q: 'Do you offer business accounts?',
          a: 'Yes! We offer corporate accounts with volume pricing, custom reporting, API access, and dedicated support. Contact us to discuss your organization\'s carbon neutrality goals.',
        },
        {
          q: 'Can I display my offset on my website?',
          a: 'Absolutely! After purchase, you\'ll receive certificates and badges you can display. We also offer API integration for real-time offset tracking on your website or app.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-hero overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
          <div className="container mx-auto px-4 relative z-10">
            <ScrollAnimate animation="fade-up">
              <div className="text-center max-w-3xl mx-auto">
                <span className="inline-block text-sm font-semibold text-forest-light uppercase tracking-wider mb-4 font-sans-tight">FAQ</span>
                <h1 className="text-4xl md:text-6xl font-display text-primary-foreground mb-6">
                  Frequently Asked <span className="italic">Questions</span>
                </h1>
                <p className="text-xl text-primary-foreground/80 font-sans-tight">
                  Everything you need to know about carbon credits and how Carbo works.
                </p>
              </div>
            </ScrollAnimate>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            {faqs.map((category, categoryIndex) => (
              <ScrollAnimate key={category.category} animation="fade-up" delay={categoryIndex * 100}>
                <div className="mb-12">
                  <h2 className="text-2xl font-display text-foreground mb-6 flex items-center gap-3">
                    <span className="h-8 w-1 bg-gradient-forest rounded-full" />
                    {category.category}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-3">
                    {category.questions.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`${category.category}-${index}`}
                        className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-forest/50 data-[state=open]:shadow-glow transition-all duration-300"
                      >
                        <AccordionTrigger className="text-left font-sans-tight hover:text-forest">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground font-sans-tight">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
