import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, CheckCircle, XCircle, Clock, AlertCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const [domain, setDomain] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState<any>(null);
  const { toast } = useToast();

  // Mock domain checking function - in real app, this would call an API
  const checkDomain = async (domainName: string) => {
    if (!domainName.trim()) {
      toast({
        title: "Domain Required",
        description: "Please enter a domain name to check.",
        variant: "destructive",
      });
      return;
    }

    if (domainName.length < 6) {
      toast({
        title: "Domain Too Short",
        description: "Domain must be at least 6 characters for free registration.",
        variant: "destructive",
      });
      return;
    }

    setIsChecking(true);
    setResult(null);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock different responses based on domain name
    const isAvailable = !['admin', 'www', 'api', 'mail', 'support'].includes(domainName.toLowerCase());
    const mockResult = {
      domain: `${domainName}.abdullah.nyc.mn`,
      available: isAvailable,
      price: isAvailable ? "Free" : "Unavailable",
      whois: {
        registrar: isAvailable ? "Available for registration" : "Free Domain Registry",
        created: isAvailable ? null : "2023-01-15",
        expires: isAvailable ? null : "2025-01-15",
        status: isAvailable ? "Available" : "Registered",
        nameservers: isAvailable ? [] : ["ns1.abdullah.nyc.mn", "ns2.abdullah.nyc.mnv"]
      }
    };

    setResult(mockResult);
    setIsChecking(false);

    if (isAvailable) {
      toast({
        title: "Domain Available! 🎉",
        description: `${domainName}.abdullah.nyc.mn is ready to register for free!`,
      });
    } else {
      toast({
        title: "Domain Taken",
        description: `${domainName}.abdullah.nyc.mn is already registered.`,
        variant: "destructive",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    checkDomain(domain);
  };

  const registerDomain = () => {
    toast({
      title: "Registration Started! 🚀",
      description: `Starting registration process for ${domain}.abdullah.nyc.mn`,
    });
    // In real app, this would redirect to registration form
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
          FreeDomain Subdomain Service
        </h1>

      
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Claim your free, permanent subdomain. Perfect for personal projects, portfolios, and 
          development. Subdomains with 6+ characters are free!
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-4 p-6 bg-card rounded-2xl shadow-lg border">
              <div className="flex-1 flex items-center bg-muted rounded-lg">
                <Input
                  type="text"
                  placeholder="yourname"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                  className="border-0 bg-transparent text-lg font-medium focus-visible:ring-0"
                  disabled={isChecking}
                />
                <span className="text-muted-foreground text-lg font-medium px-3">
                  .abdullah.nyc.mn
                </span>
              </div>
              
              <Button 
                type="submit"
                size="lg" 
                className="px-8 py-3 text-lg font-semibold"
                disabled={isChecking}
              >
                {isChecking ? (
                  <Clock className="w-5 h-5 mr-2 animate-spin" />
                ) : (
                  <Search className="w-5 h-5 mr-2" />
                )}
                {isChecking ? "Checking..." : "Check / WHOIS"}
              </Button>
            </div>
          </form>
          
          <p className="text-sm text-muted-foreground">
            Enter your desired subdomain name (minimum 6 characters for free)
          </p>

          {/* Results Display */}
          {result && (
            <Card className="max-w-2xl mx-auto text-left shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    Search Results for: {result.domain}
                  </h3>
                  {result.available ? (
                    <div className="flex items-center text-success">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Available
                    </div>
                  ) : (
                    <div className="flex items-center text-destructive">
                      <XCircle className="w-5 h-5 mr-2" />
                      Taken
                    </div>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Domain Info</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Price: <span className="font-medium text-foreground">{result.price}</span></p>
                      <p>Status: <span className="font-medium text-foreground">{result.whois.status}</span></p>
                      {result.whois.created && (
                        <p>Created: <span className="font-medium text-foreground">{result.whois.created}</span></p>
                      )}
                      {result.whois.expires && (
                        <p>Expires: <span className="font-medium text-foreground">{result.whois.expires}</span></p>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-2">Technical Details</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Registrar: <span className="font-medium text-foreground">{result.whois.registrar}</span></p>
                      {result.whois.nameservers.length > 0 && (
                        <div>
                          <p>Name Servers:</p>
                          {result.whois.nameservers.map((ns: string, index: number) => (
                            <p key={index} className="ml-2 font-medium text-foreground">{ns}</p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {result.available && (
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button onClick={registerDomain} className="flex-1" size="lg">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Register This Domain Free
                    </Button>
                    <Button variant="outline" size="lg">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      Set up DNS
                    </Button>
                  </div>
                )}

                {!result.available && (
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-2">
                      This domain is already taken. Try these alternatives:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[`${domain}1`, `${domain}2024`, `my${domain}`, `${domain}hub`].map((suggestion, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setDomain(suggestion);
                            checkDomain(suggestion);
                          }}
                        >
                          {suggestion}.abdullah.nyc.mn
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
