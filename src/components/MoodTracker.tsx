import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smile, Meh, Frown, TrendingUp, Calendar } from "lucide-react";
import { useState } from "react";

const moods = [
  { icon: Smile, label: "Great", color: "text-secondary hover:bg-secondary/20" },
  { icon: Smile, label: "Good", color: "text-accent hover:bg-accent/20" },
  { icon: Meh, label: "Okay", color: "text-primary hover:bg-primary/20" },
  { icon: Meh, label: "Low", color: "text-orange-500 hover:bg-orange-50" },
  { icon: Frown, label: "Struggling", color: "text-destructive hover:bg-destructive/20" },
];

export const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-8 md:p-12 shadow-[var(--shadow-medium)] border-border bg-card">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Are You Feeling{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Today?
              </span>
            </h2>
            <p className="text-muted-foreground">
              Track your emotional journey and discover patterns that help you thrive.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {moods.map((mood, index) => (
              <button
                key={index}
                onClick={() => setSelectedMood(index)}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                  selectedMood === index
                    ? "border-primary bg-primary/10 shadow-[var(--shadow-soft)]"
                    : "border-border hover:border-primary/50"
                } ${mood.color}`}
              >
                <mood.icon className="w-10 h-10 mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">{mood.label}</p>
              </button>
            ))}
          </div>
          
          {selectedMood !== null && (
            <div className="bg-muted/50 rounded-2xl p-6 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Quick Wellness Check</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {selectedMood <= 1
                      ? "That's wonderful! Keep this momentum going. What's contributing to your positive mood?"
                      : selectedMood === 2
                      ? "It's okay to have neutral days. Small steps still count. What would make today better?"
                      : "I hear you. Tough days happen, and you're not alone. Would you like some coping strategies?"}
                  </p>
                  
                  <Button variant="peaceful" className="w-full sm:w-auto">
                    Get Personalized Support
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 rounded-xl border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="font-semibold text-sm">7-Day Streak</span>
              </div>
              <p className="text-2xl font-bold text-primary">5 days</p>
            </div>
            
            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-4 rounded-xl border border-secondary/20">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-secondary" />
                <span className="font-semibold text-sm">Mood Trend</span>
              </div>
              <p className="text-2xl font-bold text-secondary">↗ Improving</p>
            </div>
            
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-4 rounded-xl border border-accent/20">
              <div className="flex items-center gap-2 mb-2">
                <Smile className="w-5 h-5 text-accent" />
                <span className="font-semibold text-sm">Best Days</span>
              </div>
              <p className="text-2xl font-bold text-accent">12 total</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};