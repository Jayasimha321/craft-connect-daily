import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Briefcase, MapPin, Star, ChevronRight, Hammer, Wrench, Scissors } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [userType, setUserType] = useState<'worker' | 'employer' | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-primary">SkillConnect</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button onClick={() => window.location.href = '/auth'}>Sign In</Button>
            <Button onClick={() => window.location.href = '/auth'}>Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Connecting Skills with 
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent"> Opportunities</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Bridge the gap between skilled workers in rural areas and employers seeking their expertise. 
            Find work or find workers - it's that simple.
          </p>

          {/* User Type Selection */}
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-16">
            <Card 
              className={`p-8 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                userType === 'worker' ? 'ring-2 ring-primary shadow-lg' : ''
              }`}
              onClick={() => setUserType('worker')}
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Hammer className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">I'm a Skilled Worker</h3>
                <p className="text-muted-foreground text-center">
                  Showcase your skills and connect with employers looking for your expertise
                </p>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">Carpentry</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">Plumbing</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">Electrical</span>
                </div>
              </div>
            </Card>

            <Card 
              className={`p-8 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                userType === 'employer' ? 'ring-2 ring-primary shadow-lg' : ''
              }`}
              onClick={() => setUserType('employer')}
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold">I'm an Employer</h3>
                <p className="text-muted-foreground text-center">
                  Find qualified skilled workers in your area for your projects and jobs
                </p>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Post Jobs</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Browse Workers</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Connect</span>
                </div>
              </div>
            </Card>
          </div>

          {userType && (
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 animate-in slide-in-from-bottom-4"
              onClick={() => window.location.href = userType === 'worker' ? '/worker/register' : '/employer/dashboard'}
            >
              Continue as {userType === 'worker' ? 'Skilled Worker' : 'Employer'}
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-16">How SkillConnect Works</h3>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Create Your Profile</h4>
              <p className="text-muted-foreground">
                Workers showcase their skills and location. Employers describe their job requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Find Matches Nearby</h4>
              <p className="text-muted-foreground">
                Our system connects workers and employers based on skills, location, and availability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-success" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Connect & Work</h4>
              <p className="text-muted-foreground">
                Message directly, discuss projects, and build lasting professional relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-16">Empowering Rural Communities</h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Skilled Workers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-muted-foreground">Job Opportunities</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-success mb-2">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Skills */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-16">Popular Skills on SkillConnect</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { skill: "Carpentry", icon: Hammer, count: "150+ Workers" },
              { skill: "Plumbing", icon: Wrench, count: "120+ Workers" },
              { skill: "Tailoring", icon: Scissors, count: "200+ Workers" },
              { skill: "Electrical", icon: Users, count: "80+ Workers" },
              { skill: "Masonry", icon: Hammer, count: "100+ Workers" },
              { skill: "Painting", icon: Wrench, count: "90+ Workers" },
              { skill: "Welding", icon: Users, count: "60+ Workers" },
              { skill: "Gardening", icon: Scissors, count: "180+ Workers" }
            ].map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">{item.skill}</h4>
                <p className="text-sm text-muted-foreground">{item.count}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Users className="w-6 h-6" />
                <span className="text-xl font-bold">SkillConnect</span>
              </div>
              <p className="text-primary-foreground/80">
                Connecting skilled workers with opportunities across rural and semi-urban areas.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">For Workers</h5>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Create Profile</li>
                <li>Browse Jobs</li>
                <li>Get Hired</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">For Employers</h5>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Post Jobs</li>
                <li>Find Workers</li>
                <li>Manage Projects</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Safety</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 SkillConnect. Empowering rural communities through skill-based employment.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;