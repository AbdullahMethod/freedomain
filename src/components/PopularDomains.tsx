import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Star } from "lucide-react";

const PopularDomains = () => {
  const popularDomains = [
    { name: "portfolio", users: "2.3k", category: "Personal" },
    { name: "project", users: "1.8k", category: "Development" },
    { name: "github", users: "1.5k", category: "Code" },
    { name: "website", users: "1.2k", category: "Business" },
    { name: "landing", users: "982", category: "Marketing" },
    { name: "startup", users: "756", category: "Business" }
  ];

  const categories = [
    { name: "Personal", color: "bg-blue-100 text-blue-700", count: "3.2k" },
    { name: "Development", color: "bg-green-100 text-green-700", count: "2.8k" },
    { name: "Business", color: "bg-purple-100 text-purple-700", count: "2.1k" },
    { name: "Creative", color: "bg-orange-100 text-orange-700", count: "1.5k" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Popular Domain Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what others are building with DomainHub subdomains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${category.color}`}>
                  {category.name}
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">
                  {category.count}
                </div>
                <p className="text-sm text-muted-foreground">Active domains</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Most Popular Domain Names
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularDomains.map((domain, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="font-semibold text-foreground">
                        {domain.name}.domainhub.dev
                      </span>
                    </div>
                    <Button variant="outline" size="sm">
                      Try It
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>{domain.users} users</span>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs ${
                      domain.category === 'Personal' ? 'bg-blue-100 text-blue-700' :
                      domain.category === 'Development' ? 'bg-green-100 text-green-700' :
                      domain.category === 'Business' ? 'bg-purple-100 text-purple-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {domain.category}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              <TrendingUp className="w-5 h-5 mr-2" />
              View All Popular Domains
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularDomains;