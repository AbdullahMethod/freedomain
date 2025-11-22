import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Free Domnain</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-to-use" className="text-muted-foreground hover:text-foreground transition-colors">
              How to Use
            </a>
            <a href="#policy" className="text-muted-foreground hover:text-foreground transition-colors">
              Policy
            </a>
            <a href="#terms" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms & Conditions
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              English
            </Button>
            <Button variant="default" size="sm">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
