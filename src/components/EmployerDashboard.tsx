import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Briefcase, Plus, Search, MapPin, Clock, Phone, Mail, Star } from "lucide-react";

const EmployerDashboard = () => {
  const [activeTab, setActiveTab] = useState<'browse' | 'post' | 'jobs'>('browse');
  const [searchFilters, setSearchFilters] = useState({
    skill: '',
    location: '',
    experience: ''
  });

  // Mock worker data - in real app, this would come from Supabase
  const mockWorkers = [
    {
      id: 1,
      name: "Rajesh Kumar",
      skills: ["Carpentry", "Construction"],
      location: "Rural North Region",
      experience: "6-10 years",
      rating: 4.8,
      rate: "₹300/hour",
      availability: "Full Time",
      phone: "+91 98765 43210",
      description: "Expert carpenter with 8 years experience in furniture making and house construction."
    },
    {
      id: 2,
      name: "Priya Sharma",
      skills: ["Tailoring", "Embroidery"],
      location: "Semi-Urban East",
      experience: "10+ years",
      rating: 4.9,
      rate: "₹250/hour",
      availability: "Part Time",
      phone: "+91 87654 32109",
      description: "Professional tailor specializing in traditional and modern clothing designs."
    },
    {
      id: 3,
      name: "Suresh Patel",
      skills: ["Plumbing", "HVAC"],
      location: "Rural South Region",
      experience: "2-5 years",
      rating: 4.6,
      rate: "₹400/hour",
      availability: "Flexible",
      phone: "+91 76543 21098",
      description: "Skilled plumber with expertise in water systems and air conditioning maintenance."
    }
  ];

  const [jobForm, setJobForm] = useState({
    title: '',
    description: '',
    skills: '',
    location: '',
    duration: '',
    budget: '',
    urgency: ''
  });

  const handleJobSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Job posting:', jobForm);
    // Reset form
    setJobForm({
      title: '',
      description: '',
      skills: '',
      location: '',
      duration: '',
      budget: '',
      urgency: ''
    });
  };

  const filteredWorkers = mockWorkers.filter(worker => {
    if (searchFilters.skill && !worker.skills.some(skill => 
      skill.toLowerCase().includes(searchFilters.skill.toLowerCase()))) {
      return false;
    }
    if (searchFilters.location && !worker.location.toLowerCase().includes(searchFilters.location.toLowerCase())) {
      return false;
    }
    if (searchFilters.experience && worker.experience !== searchFilters.experience) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Employer Dashboard</h1>
            <div className="flex items-center space-x-4">
              <Button variant="outline">Profile</Button>
              <Button variant="ghost">Sign Out</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Tab Navigation */}
        <div className="flex space-x-4 mb-8">
          <Button 
            variant={activeTab === 'browse' ? 'default' : 'outline'}
            onClick={() => setActiveTab('browse')}
            className="flex items-center gap-2"
          >
            <Search className="w-4 h-4" />
            Browse Workers
          </Button>
          <Button 
            variant={activeTab === 'post' ? 'default' : 'outline'}
            onClick={() => setActiveTab('post')}
            className="flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Post Job
          </Button>
          <Button 
            variant={activeTab === 'jobs' ? 'default' : 'outline'}
            onClick={() => setActiveTab('jobs')}
            className="flex items-center gap-2"
          >
            <Briefcase className="w-4 h-4" />
            My Jobs
          </Button>
        </div>

        {/* Browse Workers Tab */}
        {activeTab === 'browse' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Find Skilled Workers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <Label>Skill</Label>
                    <Input
                      placeholder="e.g. Carpentry, Plumbing"
                      value={searchFilters.skill}
                      onChange={(e) => setSearchFilters(prev => ({ ...prev, skill: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label>Location</Label>
                    <Input
                      placeholder="e.g. Rural North"
                      value={searchFilters.location}
                      onChange={(e) => setSearchFilters(prev => ({ ...prev, location: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label>Experience</Label>
                    <Select onValueChange={(value) => setSearchFilters(prev => ({ ...prev, experience: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Any experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Any experience</SelectItem>
                        <SelectItem value="0-1">0-1 years</SelectItem>
                        <SelectItem value="2-5">2-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6">
              {filteredWorkers.map((worker) => (
                <Card key={worker.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold mb-2">{worker.name}</h3>
                            <div className="flex items-center gap-2 text-muted-foreground mb-2">
                              <MapPin className="w-4 h-4" />
                              <span>{worker.location}</span>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span>{worker.rating}</span>
                              <span className="text-muted-foreground">•</span>
                              <span className="text-accent font-semibold">{worker.rate}</span>
                            </div>
                          </div>
                          <Badge variant="secondary">{worker.experience}</Badge>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {worker.skills.map((skill) => (
                            <Badge key={skill} variant="outline">{skill}</Badge>
                          ))}
                        </div>

                        <p className="text-muted-foreground mb-4">{worker.description}</p>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {worker.availability}
                          </div>
                          <div className="flex items-center gap-1">
                            <Phone className="w-4 h-4" />
                            {worker.phone}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 min-w-fit">
                        <Button size="sm">Contact Worker</Button>
                        <Button size="sm" variant="outline">View Profile</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Post Job Tab */}
        {activeTab === 'post' && (
          <Card>
            <CardHeader>
              <CardTitle>Post a New Job</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleJobSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Job Title</Label>
                    <Input
                      id="title"
                      value={jobForm.title}
                      onChange={(e) => setJobForm(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="e.g. Bathroom Renovation"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="skills">Required Skills</Label>
                    <Input
                      id="skills"
                      value={jobForm.skills}
                      onChange={(e) => setJobForm(prev => ({ ...prev, skills: e.target.value }))}
                      placeholder="e.g. Plumbing, Tiling"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Job Location</Label>
                    <Select onValueChange={(value) => setJobForm(prev => ({ ...prev, location: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rural-north">Rural North Region</SelectItem>
                        <SelectItem value="rural-south">Rural South Region</SelectItem>
                        <SelectItem value="rural-east">Rural East Region</SelectItem>
                        <SelectItem value="rural-west">Rural West Region</SelectItem>
                        <SelectItem value="semi-urban-north">Semi-Urban North</SelectItem>
                        <SelectItem value="semi-urban-south">Semi-Urban South</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration">Project Duration</Label>
                    <Select onValueChange={(value) => setJobForm(prev => ({ ...prev, duration: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Expected duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-day">1 Day</SelectItem>
                        <SelectItem value="2-3-days">2-3 Days</SelectItem>
                        <SelectItem value="1-week">1 Week</SelectItem>
                        <SelectItem value="2-4-weeks">2-4 Weeks</SelectItem>
                        <SelectItem value="1-3-months">1-3 Months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget (₹)</Label>
                    <Input
                      id="budget"
                      value={jobForm.budget}
                      onChange={(e) => setJobForm(prev => ({ ...prev, budget: e.target.value }))}
                      placeholder="e.g. 15000"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="urgency">Urgency</Label>
                    <Select onValueChange={(value) => setJobForm(prev => ({ ...prev, urgency: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="How urgent?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="flexible">Flexible</SelectItem>
                        <SelectItem value="within-week">Within a week</SelectItem>
                        <SelectItem value="urgent">Urgent (ASAP)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Job Description</Label>
                  <Textarea
                    id="description"
                    value={jobForm.description}
                    onChange={(e) => setJobForm(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Describe the work that needs to be done, materials required, specific requirements..."
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Post Job
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {/* My Jobs Tab */}
        {activeTab === 'jobs' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">My Posted Jobs</h2>
              <Button onClick={() => setActiveTab('post')}>
                <Plus className="w-4 h-4 mr-2" />
                Post New Job
              </Button>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="text-center py-12">
                  <Briefcase className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No jobs posted yet</h3>
                  <p className="text-muted-foreground mb-4">
                    Start by posting your first job to connect with skilled workers
                  </p>
                  <Button onClick={() => setActiveTab('post')}>Post Your First Job</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployerDashboard;