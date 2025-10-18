import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-[var(--shadow-soft)] border border-border">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Join Thousands of CA Students Finding Peace</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Ready to Transform{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Stress Into Strength?
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Your CA journey doesn't have to be lonely or overwhelming. 
            Start your free wellness journey today — no signup, no credit card, no waiting.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="xl" className="group">
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Start Free AI Chat Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="peaceful" size="xl">
              Explore Wellness Modules
            </Button>
          </div>
          
          <div className="pt-8 grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-primary mb-1">10,000+</p>
              <p className="text-sm text-muted-foreground">Students Supported</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent mb-1">24/7</p>
              <p className="text-sm text-muted-foreground">AI Availability</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-secondary mb-1">100%</p>
              <p className="text-sm text-muted-foreground">Free Forever</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};