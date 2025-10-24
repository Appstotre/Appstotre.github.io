import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AppCard } from "@/components/AppCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const topGames = [
  { name: "Dragon Quest", developer: "RPG Masters", rating: 9.4, icon: "🐉", downloads: "140M+" },
  { name: "City Builder Pro", developer: "Construct Co", rating: 9.3, icon: "🏗️", downloads: "150M+" },
  { name: "Ninja Fighter", developer: "Action Studios", rating: 9.2, icon: "🥷", downloads: "95M+" },
  { name: "Battle Royale Elite", developer: "Epic Studios", rating: 9.1, icon: "⚔️", downloads: "300M+" },
  { name: "Racing Thunder", developer: "Speed Games", rating: 9.0, icon: "🏎️", downloads: "120M+" },
  { name: "Space Wars", developer: "Cosmic Games", rating: 8.9, icon: "🚀", downloads: "60M+" },
  { name: "Zombie Survival", developer: "Horror Games", rating: 8.9, icon: "🧟", downloads: "85M+" },
  { name: "Puzzle Quest", developer: "Brain Games", rating: 8.8, icon: "🧩", downloads: "80M+" },
];

const topApps = [
  { name: "Language Learn", developer: "EduTech", rating: 9.3, icon: "🌍", downloads: "85M+" },
  { name: "Photo Editor Pro", developer: "Creative Apps", rating: 9.2, icon: "📸", downloads: "50M+" },
  { name: "Maps Navigator", developer: "Travel Tech", rating: 9.2, icon: "🗺️", downloads: "250M+" },
  { name: "Video Editor", developer: "Media Studios", rating: 9.1, icon: "🎬", downloads: "120M+" },
  { name: "Fitness Tracker", developer: "HealthCo", rating: 9.0, icon: "💪", downloads: "75M+" },
  { name: "Email Hub", developer: "Comm Studios", rating: 9.0, icon: "📧", downloads: "180M+" },
  { name: "Music Stream Plus", developer: "AudioTech", rating: 8.9, icon: "🎵", downloads: "200M+" },
  { name: "File Manager Pro", developer: "Tools Inc", rating: 8.9, icon: "📁", downloads: "90M+" },
];

const trending = [
  { name: "Dragon Quest", developer: "RPG Masters", rating: 9.4, icon: "🐉", downloads: "140M+" },
  { name: "Language Learn", developer: "EduTech", rating: 9.3, icon: "🌍", downloads: "85M+" },
  { name: "City Builder Pro", developer: "Construct Co", rating: 9.3, icon: "🏗️", downloads: "150M+" },
  { name: "Maps Navigator", developer: "Travel Tech", rating: 9.2, icon: "🗺️", downloads: "250M+" },
  { name: "Photo Editor Pro", developer: "Creative Apps", rating: 9.2, icon: "📸", downloads: "50M+" },
  { name: "Ninja Fighter", developer: "Action Studios", rating: 9.2, icon: "🥷", downloads: "95M+" },
];

export default function TopCharts() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[var(--gradient-hero)] py-16">
          <div className="container">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Top Charts
            </h1>
            <p className="text-lg text-white/90">
              The most popular and trending apps and games
            </p>
          </div>
        </section>

        {/* Charts */}
        <section className="py-12">
          <div className="container">
            <Tabs defaultValue="trending" className="w-full">
              <TabsList className="mb-8">
                <TabsTrigger value="trending">Trending</TabsTrigger>
                <TabsTrigger value="games">Top Games</TabsTrigger>
                <TabsTrigger value="apps">Top Apps</TabsTrigger>
              </TabsList>
              
              <TabsContent value="trending">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold">Trending Now</h2>
                  <p className="text-muted-foreground">What's hot this week</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {trending.map((item, index) => (
                    <div key={item.name} className="relative">
                      <div className="absolute -left-2 -top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                        {index + 1}
                      </div>
                      <AppCard {...item} />
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="games">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold">Top Games</h2>
                  <p className="text-muted-foreground">Highest rated games</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {topGames.map((game, index) => (
                    <div key={game.name} className="relative">
                      <div className="absolute -left-2 -top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                        {index + 1}
                      </div>
                      <AppCard {...game} />
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="apps">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold">Top Apps</h2>
                  <p className="text-muted-foreground">Highest rated apps</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {topApps.map((app, index) => (
                    <div key={app.name} className="relative">
                      <div className="absolute -left-2 -top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                        {index + 1}
                      </div>
                      <AppCard {...app} />
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
