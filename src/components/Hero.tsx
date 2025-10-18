import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-wellness.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />
      
      {/* Floating orbs for depth */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-[var(--shadow-soft)] border border-border">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                Free AI-Powered Mental Wellness
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Journey to{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Inner Peace
              </span>{" "}
              Starts Here
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Designed exclusively for CA students navigating the pressures of exams, articleship, and ambition. 
              Get <strong>instant, empathetic AI support</strong> — available 24/7, completely free.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="xl"
                className="group"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Start Free Chat Now
              </Button>
              
              <Button 
                variant="peaceful" 
                size="xl"
              >
                Explore Wellness Programs
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span>100% Free Forever</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>AI-Powered Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>Anonymous & Safe</span>
              </div>
            </div>
          </div>
          
          {/* Right image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
            <img
              src={heroImage}
              alt="Peaceful student studying with calm mindset"
              className="relative rounded-3xl shadow-[var(--shadow-medium)] w-full h-auto object-cover"
            />
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-[var(--shadow-medium)] border border-border max-w-xs hidden lg:block">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">24/7 AI Support</p>
                  <p className="text-xs text-muted-foreground">
                    Instant help whenever stress hits. Never face it alone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};