import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

const gameCategories = [
  { name: "Action", icon: "⚔️", count: "2,500+" },
  { name: "Adventure", icon: "🗺️", count: "1,800+" },
  { name: "Puzzle", icon: "🧩", count: "3,200+" },
  { name: "Racing", icon: "🏎️", count: "900+" },
  { name: "Sports", icon: "⚽", count: "1,200+" },
  { name: "Strategy", icon: "🎯", count: "1,500+" },
  { name: "Simulation", icon: "🎮", count: "1,100+" },
  { name: "RPG", icon: "🐉", count: "2,000+" },
];

const appCategories = [
  { name: "Social", icon: "💬", count: "1,200+" },
  { name: "Photography", icon: "📸", count: "1,500+" },
  { name: "Productivity", icon: "📝", count: "2,300+" },
  { name: "Music & Audio", icon: "🎵", count: "1,800+" },
  { name: "Video Players", icon: "🎬", count: "800+" },
  { name: "Communication", icon: "📧", count: "1,600+" },
  { name: "Tools", icon: "🔧", count: "3,500+" },
  { name: "Education", icon: "📚", count: "2,100+" },
];

function CategoryCard({ name, icon, count }: { name: string; icon: string; count: string }) {
  return (
    <Link href="/games">
      <Card className="group overflow-hidden border-0 bg-gradient-to-b from-card to-secondary/20 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-hover)] hover:-translate-y-1">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-3xl">
              {icon}
            </div>
            <div>
              <h3 className="font-semibold group-hover:text-primary transition-colors">
                {name}
              </h3>
              <p className="text-sm text-muted-foreground">{count} apps</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function Categories() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[var(--gradient-hero)] py-16">
          <div className="container">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Browse by Category
            </h1>
            <p className="text-lg text-white/90">
              Find apps and games organized by categories
            </p>
          </div>
        </section>

        {/* Game Categories */}
        <section className="py-12">
          <div className="container">
            <h2 className="mb-6 text-2xl font-bold">Game Categories</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {gameCategories.map((category) => (
                <CategoryCard key={category.name} {...category} />
              ))}
            </div>
          </div>
        </section>

        {/* App Categories */}
        <section className="py-12 bg-secondary/30">
          <div className="container">
            <h2 className="mb-6 text-2xl font-bold">App Categories</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {appCategories.map((category) => (
                <CategoryCard key={category.name} {...category} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
