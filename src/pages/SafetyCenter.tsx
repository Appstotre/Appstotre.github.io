import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Shield, Lock, Eye, AlertTriangle } from "lucide-react";

const safetyFeatures = [
  {
    icon: Shield,
    title: "App Verification",
    description: "Every app is thoroughly scanned and verified before being made available on our platform. We use advanced security tools to detect malware, viruses, and suspicious code."
  },
  {
    icon: Lock,
    title: "Secure Downloads",
    description: "All downloads are encrypted and served through secure channels. Your downloads are protected from tampering and man-in-the-middle attacks."
  },
  {
    icon: Eye,
    title: "Privacy Protection",
    description: "We review app permissions and privacy policies to ensure apps are transparent about data collection. Users are informed about what data apps access."
  },
  {
    icon: AlertTriangle,
    title: "Rapid Response",
    description: "Our security team monitors for threats 24/7. If an app is reported or found to be malicious, it's removed immediately and users are notified."
  },
];

const safetyTips = [
  "Always check app permissions before installing",
  "Keep your apps updated to the latest versions",
  "Only download apps from trusted sources",
  "Read app reviews and ratings from other users",
  "Be cautious of apps requesting unnecessary permissions",
  "Report suspicious apps immediately",
  "Use strong passwords for your account",
  "Enable two-factor authentication when available",
];

export default function SafetyCenter() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[var(--gradient-hero)] py-16">
          <div className="container">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Safety Center
            </h1>
            <p className="text-lg text-white/90">
              Your security is our top priority
            </p>
          </div>
        </section>

        {/* Safety Features */}
        <section className="py-16">
          <div className="container max-w-6xl">
            <h2 className="mb-8 text-3xl font-bold text-center">How We Keep You Safe</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {safetyFeatures.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Tips */}
        <section className="py-16 bg-secondary/30">
          <div className="container max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-center">Safety Tips</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {safetyTips.map((tip, index) => (
                <div key={index} className="flex gap-3 rounded-lg bg-card p-4 shadow-sm">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                  <p className="text-sm">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Report Issues */}
        <section className="py-16">
          <div className="container max-w-4xl">
            <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold">Report a Security Issue</h2>
              <p className="mb-6 text-muted-foreground">
                If you've discovered a security vulnerability or encountered a suspicious app, 
                please report it immediately to our security team.
              </p>
              <a 
                href="mailto:security@appstore.com"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90"
              >
                Report Security Issue
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
