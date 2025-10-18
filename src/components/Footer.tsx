import { Heart, Shield, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              CA Wellness Hub
            </h3>
            <p className="text-sm text-muted-foreground">
              Empowering CA students across India with free, AI-powered mental wellness support. 
              You're not alone in this journey.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Wellness Programs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">AI Chat Support</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Resource Library</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Community Forum</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Safety & Privacy
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Crisis Resources</a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-1">
                <Mail className="w-3 h-3" />
                Contact Us
              </a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CA Wellness Hub. Built with care for CA students. 
            This platform provides wellness support and does not replace professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
};