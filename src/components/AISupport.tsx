import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Shield, Clock, Heart, Sparkles, CheckCircle2 } from "lucide-react";
import aiSupportIcon from "@/assets/ai-support-icon.png";

export const AISupport = () => {
  const features = [
    { icon: Clock, text: "24/7 instant support — no waiting, no appointments" },
    { icon: Shield, text: "100% anonymous and confidential conversations" },
    { icon: Heart, text: "Empathetic, non-judgmental AI companion" },
    { icon: Sparkles, text: "Personalized coping strategies & tools" },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Visual */}
          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-card to-muted/30 border-border shadow-[var(--shadow-medium)]">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <img src={aiSupportIcon} alt="AI Support" className="w-12 h-12" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                    <span className="text-sm font-medium text-muted-foreground">Online Now</span>
                  </div>
                  <h3 className="text-xl font-semibold">AI Wellness Companion</h3>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="bg-primary/10 p-4 rounded-2xl rounded-bl-none">
                  <p className="text-sm text-foreground">
                    I'm feeling overwhelmed with my CA Final exams. Everything feels too much.
                  </p>
                </div>
                
                <div className="bg-accent/10 p-4 rounded-2xl rounded-br-none ml-4">
                  <p className="text-sm text-foreground">
                    I understand how intense CA Final prep can be. Let's take this step by step. 
                    What's weighing on you the most right now — the study load, exam anxiety, or something else?
                  </p>
                </div>
                
                <div className="bg-primary/10 p-4 rounded-2xl rounded-bl-none">
                  <p className="text-sm text-foreground">
                    I can't seem to focus. My mind keeps wandering.
                  </p>
                </div>
                
                <div className="bg-accent/10 p-4 rounded-2xl rounded-br-none ml-4">
                  <p className="text-sm text-foreground">
                    That's completely normal under stress. Try the 5-4-3-2-1 grounding technique: 
                    Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste. 
                    This brings you back to the present. Want to try it together?
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
                <MessageCircle className="w-5 h-5 text-primary" />
                <input
                  type="text"
                  placeholder="Type your thoughts here..."
                  className="flex-1 bg-transparent outline-none text-sm"
                  disabled
                />
              </div>
            </Card>
          </div>
          
          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Your Free{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  AI Psychologist
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Trained to understand CA student challenges, offering solution-focused support 
                whenever you need it — no judgment, no wait times, completely free.
              </p>
            </div>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground pt-2">{feature.text}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-muted/50 border border-border rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Shield className="w-5 h-5" />
                <span>Safe & Ethical AI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Our AI provides coping strategies and emotional support. For emergencies or clinical needs, 
                we'll guide you to professional help. Your wellbeing is our priority.
              </p>
            </div>
            
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              <MessageCircle className="w-5 h-5" />
              Start Chatting Now — It's Free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};