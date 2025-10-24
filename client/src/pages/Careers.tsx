import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Briefcase } from "lucide-react";

const openPositions = [
  {
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Build amazing user experiences for millions of users worldwide."
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Create beautiful and intuitive designs for our platform."
  },
  {
    title: "Security Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Help keep our users' data safe and secure."
  },
  {
    title: "Content Writer",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Craft compelling content that engages our community."
  },
  {
    title: "Mobile Developer",
    department: "Engineering",
    location: "New York, NY",
    type: "Full-time",
    description: "Develop native mobile applications for Android and iOS."
  },
  {
    title: "Data Analyst",
    department: "Analytics",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Turn data into actionable insights for our business."
  },
];

const benefits = [
  { icon: "💰", title: "Competitive Salary", description: "Market-leading compensation packages" },
  { icon: "🏥", title: "Health Insurance", description: "Comprehensive medical, dental, and vision" },
  { icon: "🏖️", title: "Unlimited PTO", description: "Take time off when you need it" },
  { icon: "🏠", title: "Remote Work", description: "Flexible work from anywhere" },
  { icon: "📚", title: "Learning Budget", description: "Annual budget for courses and conferences" },
  { icon: "🎉", title: "Team Events", description: "Regular team building activities" },
];

export default function Careers() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[var(--gradient-hero)] py-16">
          <div className="container">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Careers at AppStore
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Join our team and help millions of users discover amazing apps and games
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-secondary/30">
          <div className="container">
            <h2 className="mb-8 text-center text-3xl font-bold">Why Join Us</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="border-0 bg-gradient-to-b from-card to-secondary/20">
                  <CardContent className="p-6 text-center">
                    <div className="mb-3 text-4xl">{benefit.icon}</div>
                    <h3 className="mb-2 font-semibold">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16">
          <div className="container max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold">Open Positions</h2>
            <div className="space-y-4">
              {openPositions.map((position) => (
                <Card key={position.title} className="overflow-hidden border-0 bg-gradient-to-b from-card to-secondary/20 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-hover)]">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div className="flex-1">
                        <h3 className="mb-2 text-xl font-semibold">{position.title}</h3>
                        <p className="mb-3 text-sm text-muted-foreground">{position.description}</p>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            <span>{position.department}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{position.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{position.type}</span>
                          </div>
                        </div>
                      </div>
                      <Button>Apply Now</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
