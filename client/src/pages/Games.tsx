import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AppCard } from "@/components/AppCard";
import { Button } from "@/components/ui/button";

const categories = ["Action", "Adventure", "Puzzle", "Racing", "Sports", "Strategy", "Simulation", "RPG"];

const games = [
  { name: "Battle Royale Elite", developer: "Epic Studios", rating: 9.1, icon: "⚔️", downloads: "300M+" },
  { name: "Puzzle Quest", developer: "Brain Games", rating: 8.8, icon: "🧩", downloads: "80M+" },
  { name: "City Builder Pro", developer: "Construct Co", rating: 9.3, icon: "🏗️", downloads: "150M+" },
  { name: "Space Wars", developer: "Cosmic Games", rating: 8.9, icon: "🚀", downloads: "60M+" },
  { name: "Racing Thunder", developer: "Speed Games", rating: 9.0, icon: "🏎️", downloads: "120M+" },
  { name: "Fantasy Adventure", developer: "Magic Studios", rating: 8.7, icon: "🗡️", downloads: "90M+" },
  { name: "Soccer Champions", developer: "Sports Inc", rating: 8.6, icon: "⚽", downloads: "110M+" },
  { name: "Zombie Survival", developer: "Horror Games", rating: 8.9, icon: "🧟", downloads: "85M+" },
  { name: "Card Master", developer: "Strategy Co", rating: 8.5, icon: "🎴", downloads: "45M+" },
  { name: "Farm Paradise", developer: "Casual Games", rating: 8.8, icon: "🌾", downloads: "130M+" },
  { name: "Ninja Fighter", developer: "Action Studios", rating: 9.2, icon: "🥷", downloads: "95M+" },
  { name: "Dragon Quest", developer: "RPG Masters", rating: 9.4, icon: "🐉", downloads: "140M+" },
];

export default function Games() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[var(--gradient-hero)] py-16">
          <div className="container">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Top Games
            </h1>
            <p className="text-lg text-white/90">
              Discover the best and most popular games
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="border-b bg-background py-6">
          <div className="container">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <Button key={category} variant="secondary" size="sm" className="whitespace-nowrap">
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Games Grid */}
        <section className="py-12">
          <div className="container">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">All Games</h2>
              <p className="text-muted-foreground">Browse our complete collection</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {games.map((game) => (
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
