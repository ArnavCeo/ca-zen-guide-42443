import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wind, Brain, BookOpen, Lightbulb, Download } from "lucide-react";
import meditationIcon from "@/assets/meditation-icon.png";

const resources = [
  {
    icon: Wind,
    title: "5-Minute Breathing Exercise",
    description: "Quick anxiety relief technique for exam stress",
    action: "Start Now",
    color: "from-primary to-primary/70",
  },
  {
    icon: Brain,
    title: "Focus Boost Meditation",
    description: "Guided audio to sharpen concentration before studying",
    action: "Listen",
    color: "from-accent to-accent/70",
  },
  {
    icon: BookOpen,
    title: "CA Study Planner Template",
    description: "Realistic time-management framework for all levels",
    action: "Download",
    color: "from-secondary to-secondary/70",
  },
  {
    icon: Lightbulb,
    title: "Daily Affirmations",
    description: "Confidence-building mantras for CA students",
    action: "Read",
    color: "from-purple-500 to-purple-400",
  },
];

export const QuickResources = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block p-3 bg-muted rounded-2xl mb-4">
            <img src={meditationIcon} alt="Meditation" className="w-12 h-12" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Instant{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Wellness Tools
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Free resources you can use right now to feel better, focus sharper, and study smarter.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-[var(--shadow-medium)] transition-all duration-500 hover:-translate-y-2 cursor-pointer border-border bg-card group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <resource.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
              
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {resource.description}
              </p>
              
              <Button variant="peaceful" size="sm" className="w-full">
                <Download className="w-4 h-4" />
                {resource.action}
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Browse Full Resource Library
          </Button>
        </div>
      </div>
    </section>
  );
};