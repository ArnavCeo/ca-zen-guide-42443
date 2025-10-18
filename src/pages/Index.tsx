import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare, Sparkles, Zap } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="rounded-full bg-primary/10 p-6 backdrop-blur-sm border border-primary/20">
            <MessageSquare className="h-16 w-16 text-primary" />
          </div>
        </div>

        {/* Hero Text */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
            Chat with AI
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Experience intelligent conversations powered by advanced AI technology
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 py-8">
          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-card/50 transition-all">
            <Sparkles className="h-8 w-8 text-primary mb-3 mx-auto" />
            <h3 className="font-semibold mb-2">Smart Responses</h3>
            <p className="text-sm text-muted-foreground">
              Get intelligent, context-aware answers to your questions
            </p>
          </div>
          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-card/50 transition-all">
            <Zap className="h-8 w-8 text-primary mb-3 mx-auto" />
            <h3 className="font-semibold mb-2">Lightning Fast</h3>
            <p className="text-sm text-muted-foreground">
              Experience real-time streaming responses as you chat
            </p>
          </div>
          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-card/50 transition-all">
            <MessageSquare className="h-8 w-8 text-primary mb-3 mx-auto" />
            <h3 className="font-semibold mb-2">Natural Conversations</h3>
            <p className="text-sm text-muted-foreground">
              Chat naturally like you would with a real person
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center gap-4 pt-4">
          <Button
            size="lg"
            onClick={() => navigate("/chat")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            Start Free Chat Now
          </Button>
        </div>

        {/* Subtle Footer Text */}
        <p className="text-sm text-muted-foreground pt-8">
          No signup required • Start chatting instantly
        </p>
      </div>
    </div>
  );
};

export default Index;
