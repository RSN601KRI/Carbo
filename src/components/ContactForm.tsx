import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ScrollAnimate } from '@/components/ScrollAnimate';
import { Send, MessageCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({
        title: "Missing fields",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate sending
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    });
    
    setName('');
    setEmail('');
    setMessage('');
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-gradient-nature">
      <div className="container mx-auto px-4">
        <ScrollAnimate animation="fade-up">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-sm font-semibold text-forest uppercase tracking-wider mb-4 font-sans-tight">
                Get in Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">
                Want to <span className="italic text-forest">Chat?</span>
              </h2>
              <p className="text-muted-foreground font-sans-tight">
                Have questions about carbon credits? We'd love to hear from you.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 shadow-elegant">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-forest/10">
                  <MessageCircle className="h-6 w-6 text-forest" />
                </div>
                <h3 className="text-xl font-display text-foreground">Send us a message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-background border-border focus:border-forest"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-background border-border focus:border-forest"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="bg-background border-border focus:border-forest resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  variant="nature" 
                  className="w-full gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
};
