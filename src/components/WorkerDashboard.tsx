import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Search, MapPin, Clock, DollarSign, Briefcase, User, MessageCircle, Calendar } from "lucide-react";

const WorkerDashboard = () => {
  const [activeTab, setActiveTab] = useState<'jobs' | 'profile' | 'messages'>('jobs');
  const [searchFilters, setSearchFilters] = useState({
    skill: '',
    location: '',
    budget: ''
  });

  // Mock job data - in real app, this would come from Supabase
  const mockJobs = [
    {
      id: 1,
      title: "Bathroom Renovation",
      employer: "Amit Patel",
      location: "Rural North Region",
      skills: ["Plumbing", "Tiling"],
      budget: "₹25,000",
      duration: "1 Week",
      urgency: "Within a week",
      posted: "2 days ago",
      description: "Complete bathroom renovation including plumbing, tiling, and fixture installation. All materials will be provided."
    },
    {
      id: 2,
      title: "Custom Furniture Making",
      employer: "Sunita Sharma",
      location: "Semi-Urban East",
      skills: ["Carpentry"],
      budget: "₹35,000",
      duration: "2-4 weeks",
      urgency: "Flexible",
      posted: "1 day ago",
      description: "Need custom wooden furniture for new home - dining table, chairs, and bedroom wardrobe. Design will be provided."
    },
    {
      id: 3,
      title: "Wedding Outfit Stitching",
      employer: "Ravi Kumar",
      location: "Rural South Region",
      skills: ["Tailoring"],
      budget: "₹15,000",
      duration: "2-3 Days",
      urgency: "Urgent (ASAP)",
      posted: "3 hours ago",
      description: "Need traditional wedding outfits stitched for family. Fabric and designs ready. Urgent requirement."
    }
  ];

  const filteredJobs = mockJobs.filter(job => {
    if (searchFilters.skill && !job.skills.some(skill => 
      skill.toLowerCase().includes(searchFilters.skill.toLowerCase()))) {
      return false;
    }
    if (searchFilters.location && !job.location.toLowerCase().includes(searchFilters.location.toLowerCase())) {
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
            <h1 className="text-2xl font-bold text-primary">Worker Dashboard</h1>
            <div className="flex items-center space-x-4">
              <Button variant="outline">Settings</Button>
              <Button variant="ghost">Sign Out</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Tab Navigation */}
        <div className="flex space-x-4 mb-8">
          <Button 
            variant={activeTab === 'jobs' ? 'default' : 'outline'}
            onClick={() => setActiveTab('jobs')}
            className="flex items-center gap-2"
          >
            <Search className="w-4 h-4" />
            Available Jobs
          </Button>
          <Button 
            variant={activeTab === 'profile' ? 'default' : 'outline'}
            onClick={() => setActiveTab('profile')}
            className="flex items-center gap-2"
          >
            <User className="w-4 h-4" />
            My Profile
          </Button>
          <Button 
            variant={activeTab === 'messages' ? 'default' : 'outline'}
            onClick={() => setActiveTab('messages')}
            className="flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Messages
          </Button>
        </div>

        {/* Available Jobs Tab */}
        {activeTab === 'jobs' && (
          <div className="space-y-6">
            {/* Search Filters */}
            <Card>
              <CardHeader>
                <CardTitle>Find Jobs Matching Your Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <Label>Skill</Label>
                    <Input
                      placeholder="Your skill area"
                      value={searchFilters.skill}
                      onChange={(e) => setSearchFilters(prev => ({ ...prev, skill: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label>Location Preference</Label>
                    <Input
                      placeholder="Preferred location"
                      value={searchFilters.location}
                      onChange={(e) => setSearchFilters(prev => ({ ...prev, location: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label>Budget Range</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any budget</SelectItem>
                        <SelectItem value="under-10k">Under ₹10,000</SelectItem>
                        <SelectItem value="10k-25k">₹10,000 - ₹25,000</SelectItem>
                        <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                        <SelectItem value="over-50k">Over ₹50,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Job Listings */}
            <div className="grid gap-6">
              {filteredJobs.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                            <p className="text-muted-foreground mb-2">Posted by {job.employer}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {job.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {job.posted}
                              </div>
                            </div>
                          </div>
                          <Badge 
                            variant={job.urgency === 'Urgent (ASAP)' ? 'destructive' : 'secondary'}
                          >
                            {job.urgency}
                          </Badge>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {job.skills.map((skill) => (
                            <Badge key={skill} variant="outline">{skill}</Badge>
                          ))}
                        </div>

                        <p className="text-muted-foreground mb-4">{job.description}</p>

                        <div className="flex items-center gap-6 text-sm">
                          <div className="flex items-center gap-1 text-accent font-semibold">
                            <DollarSign className="w-4 h-4" />
                            {job.budget}
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            {job.duration}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 min-w-fit">
                        <Button size="sm">Apply for Job</Button>
                        <Button size="sm" variant="outline">Contact Employer</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Worker Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-4">Basic Information</h3>
                    <div className="space-y-3">
                      <div>
                        <Label className="text-sm text-muted-foreground">Full Name</Label>
                        <p className="font-medium">Rajesh Kumar</p>
                      </div>
                      <div>
                        <Label className="text-sm text-muted-foreground">Location</Label>
                        <p className="font-medium">Rural North Region</p>
                      </div>
                      <div>
                        <Label className="text-sm text-muted-foreground">Phone</Label>
                        <p className="font-medium">+91 98765 43210</p>
                      </div>
                      <div>
                        <Label className="text-sm text-muted-foreground">Email</Label>
                        <p className="font-medium">rajesh.kumar@email.com</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4">Professional Information</h3>
                    <div className="space-y-3">
                      <div>
                        <Label className="text-sm text-muted-foreground">Skills</Label>
                        <div className="flex flex-wrap gap-1 mt-1">
                          <Badge variant="secondary">Carpentry</Badge>
                          <Badge variant="secondary">Construction</Badge>
                        </div>
                      </div>
                      <div>
                        <Label className="text-sm text-muted-foreground">Experience</Label>
                        <p className="font-medium">6-10 years</p>
                      </div>
                      <div>
                        <Label className="text-sm text-muted-foreground">Hourly Rate</Label>
                        <p className="font-medium">₹300/hour</p>
                      </div>
                      <div>
                        <Label className="text-sm text-muted-foreground">Availability</Label>
                        <p className="font-medium">Full Time</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Label className="text-sm text-muted-foreground">About Me</Label>
                  <p className="mt-1 text-muted-foreground">
                    Expert carpenter with 8 years experience in furniture making and house construction. 
                    Specialized in custom woodwork and home renovation projects.
                  </p>
                </div>

                <div className="mt-6">
                  <Button>Edit Profile</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Messages Tab */}
        {activeTab === 'messages' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Messages & Connections</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <MessageCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No messages yet</h3>
                  <p className="text-muted-foreground mb-4">
                    When employers contact you about jobs, their messages will appear here
                  </p>
                  <Button onClick={() => setActiveTab('jobs')}>Browse Available Jobs</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkerDashboard;