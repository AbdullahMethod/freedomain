import { Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">DomainHub</span>
            </div>
            <p className="text-muted-foreground">
              The most trusted platform for free subdomains, helping developers build amazing projects.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Free Subdomains</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">DNS Management</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">SSL Certificates</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Domain Transfer</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Status Page</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground">
            © 2024 DomainHub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;