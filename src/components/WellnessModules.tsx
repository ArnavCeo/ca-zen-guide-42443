import { Card } from "@/components/ui/card";
import { Brain, BookOpen, Heart, Users, TrendingUp, Sparkles } from "lucide-react";

const modules = [
  {
    icon: Brain,
    title: "Mind Reset",
    description: "Stress management techniques and mindfulness practices tailored for exam pressure.",
    color: "from-primary to-primary/70",
    bgColor: "bg-primary/5",
  },
  {
    icon: BookOpen,
    title: "Smart Study Habits",
    description: "Master time management, focus techniques, and effective study strategies.",
    color: "from-accent to-accent/70",
    bgColor: "bg-accent/5",
  },
  {
    icon: Heart,
    title: "Emotional Resilience",
    description: "Build strength to handle failures, setbacks, and burnout with confidence.",
    color: "from-secondary to-secondary/70",
    bgColor: "bg-secondary/5",
  },
  {
    icon: Users,
    title: "Social Balance",
    description: "Navigate relationships, family expectations, and articleship challenges.",
    color: "from-purple-500 to-purple-400",
    bgColor: "bg-purple-50",
  },
  {
    icon: TrendingUp,
    title: "Growth Mindset",
    description: "Develop lasting confidence and a vision beyond CA exams.",
    color: "from-orange-500 to-orange-400",
    bgColor: "bg-orange-50",
  },
  {
    icon: Sparkles,
    title: "Daily Wellness",
    description: "Quick exercises, affirmations, and mood tracking for consistent progress.",
    color: "from-pink-500 to-pink-400",
    bgColor: "bg-pink-50",
  },
];

export const WellnessModules = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Your{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Wellness Journey
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Six powerful modules designed to transform stress into strength, one step at a time.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <Card
              key={index}
              className="group p-6 hover:shadow-[var(--shadow-medium)] transition-all duration-500 hover:-translate-y-1 cursor-pointer border-border bg-card"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <module.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {module.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {module.description}
              </p>
              
              <div className="mt-4 flex items-center text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Explore Module →
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};