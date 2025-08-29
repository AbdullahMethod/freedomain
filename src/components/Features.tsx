import { CheckCircle, Zap, Shield, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "100% Free",
      description: "Get your permanent subdomain at no cost. No hidden fees or premium upgrades required."
    },
    {
      icon: Zap,
      title: "Instant Setup",
      description: "Your subdomain is ready in seconds. No waiting, no complex configuration needed."
    },
    {
      icon: Shield,
      title: "Reliable & Secure",
      description: "Built on robust infrastructure with SSL support and 99.9% uptime guarantee."
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Fast loading times worldwide with our distributed DNS network and CDN support."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Choose DomainHub?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The most trusted platform for free subdomains, used by thousands of developers worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;