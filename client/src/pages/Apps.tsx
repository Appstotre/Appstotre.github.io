import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AppCard } from "@/components/AppCard";
import { Button } from "@/components/ui/button";

const categories = ["Social", "Photography", "Productivity", "Music", "Video", "Communication", "Tools", "Education"];

const apps = [
  { name: "Photo Editor Pro", developer: "Creative Apps", rating: 9.2, icon: "📸", downloads: "50M+" },
  { name: "Music Stream Plus", developer: "AudioTech", rating: 8.9, icon: "🎵", downloads: "200M+" },
  { name: "Fitness Tracker", developer: "HealthCo", rating: 9.0, icon: "💪", downloads: "75M+" },
  { name: "Social Connect", developer: "NetWork Inc", rating: 8.5, icon: "💬", downloads: "500M+" },
  { name: "Video Editor", developer: "Media Studios", rating: 9.1, icon: "🎬", downloads: "120M+" },
  { name: "Note Master", developer: "Productivity Co", rating: 8.8, icon: "📝", downloads: "60M+" },
  { name: "Language Learn", developer: "EduTech", rating: 9.3, icon: "🌍", downloads: "85M+" },
  { name: "Weather Live", developer: "Climate Apps", rating: 8.7, icon: "🌤️", downloads: "100M+" },
  { name: "File Manager Pro", developer: "Tools Inc", rating: 8.9, icon: "📁", downloads: "90M+" },
  { name: "Calculator Plus", developer: "Math Apps", rating: 8.6, icon: "🔢", downloads: "150M+" },
  { name: "Email Hub", developer: "Comm Studios", rating: 9.0, icon: "📧", downloads: "180M+" },
  { name: "Maps Navigator", developer: "Travel Tech", rating: 9.2, icon: "🗺️", downloads: "250M+" },
];

export default function Apps() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[var(--gradient-hero)] py-16">
          <div className="container">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Top Apps
            </h1>
            <p className="text-lg text-white/90">
              Essential apps for your daily needs
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

        {/* Apps Grid */}
        <section className="py-12">
          <div className="container">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">All Apps</h2>
              <p className="text-muted-foreground">Browse our complete collection</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {apps.map((app) => (
                <AppCard key={app.name} {...app} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
