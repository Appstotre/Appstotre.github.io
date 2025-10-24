import { ArrowRight, Zap, Shield, Smartphone } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AppCard } from "@/components/AppCard";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const featuredApps = [
  { name: "Action Combat", developer: "GameStudio Inc", rating: 8.6, icon: "🎮", downloads: "100M+" },
  { name: "Photo Editor Pro", developer: "Creative Apps", rating: 9.2, icon: "📸", downloads: "50M+" },
  { name: "Music Stream", developer: "AudioTech", rating: 8.9, icon: "🎵", downloads: "200M+" },
  { name: "Fitness Tracker", developer: "HealthCo", rating: 9.0, icon: "💪", downloads: "75M+" },
  { name: "Racing Fever", developer: "Speed Games", rating: 8.7, icon: "🏎️", downloads: "120M+" },
  { name: "Social Connect", developer: "NetWork Inc", rating: 8.5, icon: "💬", downloads: "500M+" },
];

const topGames = [
  { name: "Battle Royale", developer: "Epic Studios", rating: 9.1, icon: "⚔️", downloads: "300M+" },
  { name: "Puzzle Master", developer: "Brain Games", rating: 8.8, icon: "🧩", downloads: "80M+" },
  { name: "City Builder", developer: "Construct Co", rating: 9.3, icon: "🏗️", downloads: "150M+" },
  { name: "Space Explorer", developer: "Cosmic Games", rating: 8.9, icon: "🚀", downloads: "60M+" },
];

const features = [
  {
    icon: Zap,
    title: "Fast Downloads",
    description: "Lightning-fast download speeds for all your apps and games",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "All apps are verified and scanned for malware protection",
  },
  {
    icon: Smartphone,
    title: "Easy Installation",
    description: "One-click install with our dedicated app manager",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[var(--gradient-hero)] py-20">
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Super Fast and Safe Downloading
              </h1>
              <p className="mb-8 text-lg text-white/90">
                One-click to install thousands of verified apps and games on your device!
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Download App Manager
              </Button>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20" />
        </section>

        {/* Features */}
        <section className="py-16 bg-secondary/30">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Apps */}
        <section className="py-16">
          <div className="container">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-3xl font-bold">Featured Apps</h2>
              <Link href="/apps">
                <Button variant="ghost">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {featuredApps.map((app) => (
                <AppCard key={app.name} {...app} />
              ))}
            </div>
          </div>
        </section>

        {/* Top Games */}
        <section className="py-16 bg-secondary/30">
          <div className="container">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-3xl font-bold">Top Download Games</h2>
              <Link href="/games">
                <Button variant="ghost">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {topGames.map((game) => (
                <AppCard key={game.name} {...game} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
