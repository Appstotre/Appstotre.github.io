import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Shield, Users, Globe, Award } from "lucide-react";

const stats = [
  { label: "Active Users", value: "500M+", icon: Users },
  { label: "Apps Available", value: "2M+", icon: Globe },
  { label: "Security Scans", value: "100%", icon: Shield },
  { label: "Customer Rating", value: "4.8/5", icon: Award },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[var(--gradient-hero)] py-16">
          <div className="container">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              About AppStore
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Your trusted platform for discovering and downloading the best apps and games
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-secondary/30">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container max-w-4xl">
            <div className="space-y-8">
              <div>
                <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We're dedicated to providing a safe, fast, and user-friendly platform for discovering 
                  and downloading apps and games. Our mission is to connect developers with users worldwide 
                  while ensuring the highest standards of security and quality.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold">Why Choose Us</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">🔒 100% Safe & Secure</h3>
                    <p className="text-muted-foreground">
                      Every app is thoroughly scanned and verified before being made available. 
                      Your security is our top priority.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">⚡ Lightning Fast</h3>
                    <p className="text-muted-foreground">
                      Optimized download speeds and efficient installation process. Get your apps 
                      installed in seconds.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">🌍 Global Community</h3>
                    <p className="text-muted-foreground">
                      Join millions of users worldwide discovering and enjoying quality apps and games 
                      every day.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">🎯 Curated Content</h3>
                    <p className="text-muted-foreground">
                      Our team carefully selects and reviews apps to ensure you get the best 
                      experience possible.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
                <p className="text-muted-foreground">
                  Have questions or feedback? We'd love to hear from you. Reach out to our support 
                  team at <a href="mailto:support@appstore.com" className="text-primary hover:underline">support@appstore.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
