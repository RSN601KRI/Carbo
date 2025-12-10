import { ScrollAnimate } from './ScrollAnimate';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Users, Heart } from 'lucide-react';
import teamImg from '@/assets/team-collaboration.jpg';

export const JoinUsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-forest-glow/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-32 -left-32 w-48 h-48 bg-emerald/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <ScrollAnimate animation="fade-left">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-forest opacity-20 rounded-3xl blur-2xl" />
              <img 
                src={teamImg}
                alt="Team collaboration"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </ScrollAnimate>

          <ScrollAnimate animation="fade-right" delay={200}>
            <div>
              <span className="inline-block text-sm font-semibold text-forest-glow uppercase tracking-wider mb-4 font-sans-tight">Join Our Mission</span>
              <h2 className="text-4xl md:text-5xl font-display text-primary-foreground mb-6">
                Be Part of the <span className="italic text-forest-glow">Solution</span>
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 font-sans-tight">
                Whether you're a developer, climate scientist, or passionate advocate, there's a place for you in our community building the future of carbon markets.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: Github, text: 'Contribute to our open-source tools' },
                  { icon: Users, text: 'Join our community of climate advocates' },
                  { icon: Heart, text: 'Support verified carbon projects' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 text-primary-foreground/90">
                    <item.icon className="h-5 w-5 text-forest-glow" />
                    <span className="font-sans-tight">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="gap-2 group">
                  Get Involved
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="ghost" size="lg" className="text-primary-foreground border border-primary-foreground/20 hover:bg-primary-foreground/10">
                  View Open Positions
                </Button>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
};