import { Card } from "@/components/ui/card";
import { Shield, Phone, AlertCircle, Heart } from "lucide-react";

export const SafetyDisclaimer = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-8 md:p-12 border-border bg-card shadow-[var(--shadow-medium)]">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Your Safety Comes First</h2>
              <p className="text-muted-foreground">
                Transparency and ethical AI practices you can trust
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-muted/50 rounded-xl p-5 border border-border">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">What Our AI Does</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Offers empathetic listening and emotional support</li>
                    <li>• Provides evidence-based coping strategies (CBT, mindfulness)</li>
                    <li>• Helps identify thought patterns and stress triggers</li>
                    <li>• Suggests self-care activities and study techniques</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/50 rounded-xl p-5 border border-border">
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">What Our AI Doesn't Do</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Does NOT diagnose mental health conditions</li>
                    <li>• Does NOT prescribe medication or replace medical advice</li>
                    <li>• Does NOT handle emergency or crisis situations</li>
                    <li>• Does NOT claim to be a licensed therapist</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-destructive/10 rounded-xl p-5 border-2 border-destructive/30">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-destructive mb-2">In Case of Emergency</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    If you're experiencing suicidal thoughts, self-harm urges, or severe mental health crisis:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="font-medium">🇮🇳 India Crisis Helplines:</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      <div className="bg-background rounded-lg p-3">
                        <p className="font-semibold">AASRA</p>
                        <p className="text-primary">+91 9820466726</p>
                      </div>
                      <div className="bg-background rounded-lg p-3">
                        <p className="font-semibold">Vandrevala Foundation</p>
                        <p className="text-primary">1860 2662 345</p>
                      </div>
                      <div className="bg-background rounded-lg p-3">
                        <p className="font-semibold">iCall</p>
                        <p className="text-primary">+91 9152987821</p>
                      </div>
                      <div className="bg-background rounded-lg p-3">
                        <p className="font-semibold">Sneha India</p>
                        <p className="text-primary">+91 44 2464 0050</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center pt-4">
              <p className="text-sm text-muted-foreground">
                This platform complements — but never replaces — professional mental health care. 
                Always consult qualified healthcare providers for clinical diagnosis and treatment.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};