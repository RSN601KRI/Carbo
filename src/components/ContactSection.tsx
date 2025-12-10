import { ScrollAnimate } from './ScrollAnimate';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-nature relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      <div className="container relative mx-auto px-4">
        <ScrollAnimate animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-semibold text-forest uppercase tracking-wider mb-4 font-sans-tight">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">
              Let's Talk About <span className="italic text-forest">Your Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground font-sans-tight">
              Have questions about carbon credits or want to discuss a partnership? We'd love to hear from you.
            </p>
          </div>
        </ScrollAnimate>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <ScrollAnimate animation="fade-left">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-display text-foreground mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: 'Email', value: 'hello@carbo.earth', href: 'mailto:hello@carbo.earth' },
                    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
                    { icon: MapPin, label: 'Office', value: 'San Francisco, CA', href: '#' },
                  ].map((item) => (
                    <a 
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border transition-all hover:border-forest/50 hover:shadow-md group"
                    >
                      <div className="p-2 rounded-lg bg-gradient-forest text-primary-foreground">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-sans-tight">{item.label}</p>
                        <p className="font-semibold text-foreground font-sans-tight group-hover:text-forest transition-colors">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimate>

          <ScrollAnimate animation="fade-right" delay={200}>
            <form className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-display text-foreground mb-6">Send a Message</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2 font-sans-tight">Name</label>
                    <Input placeholder="Your name" className="bg-background/50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2 font-sans-tight">Email</label>
                    <Input type="email" placeholder="your@email.com" className="bg-background/50" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2 font-sans-tight">Subject</label>
                  <Input placeholder="How can we help?" className="bg-background/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2 font-sans-tight">Message</label>
                  <Textarea placeholder="Tell us more about your project or question..." rows={4} className="bg-background/50" />
                </div>
                <Button type="submit" variant="default" size="lg" className="w-full gap-2 bg-gradient-forest hover:opacity-90">
                  Send Message
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
};