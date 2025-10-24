import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

const blogPosts = [
  {
    title: "Top 10 Games of 2025",
    excerpt: "Discover the most popular and exciting games that dominated this year. From action-packed adventures to puzzle masterpieces...",
    author: "Sarah Johnson",
    date: "Jan 15, 2025",
    category: "Gaming",
    image: "🎮"
  },
  {
    title: "How to Keep Your Apps Secure",
    excerpt: "Learn essential security practices to protect your data and privacy when downloading and using mobile applications...",
    author: "Michael Chen",
    date: "Jan 12, 2025",
    category: "Security",
    image: "🔒"
  },
  {
    title: "Best Productivity Apps for 2025",
    excerpt: "Boost your efficiency with these top-rated productivity applications that will transform the way you work...",
    author: "Emily Davis",
    date: "Jan 10, 2025",
    category: "Productivity",
    image: "📝"
  },
  {
    title: "Mobile Gaming Trends to Watch",
    excerpt: "Explore the latest trends shaping the mobile gaming industry, from cloud gaming to augmented reality experiences...",
    author: "James Wilson",
    date: "Jan 8, 2025",
    category: "Gaming",
    image: "🎯"
  },
  {
    title: "Photography Apps for Beginners",
    excerpt: "Start your photography journey with these user-friendly apps that offer powerful editing tools and creative features...",
    author: "Lisa Anderson",
    date: "Jan 5, 2025",
    category: "Photography",
    image: "📸"
  },
  {
    title: "Building Better Habits with Apps",
    excerpt: "Discover how mobile applications can help you develop positive habits and achieve your personal goals...",
    author: "David Miller",
    date: "Jan 3, 2025",
    category: "Lifestyle",
    image: "✨"
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[var(--gradient-hero)] py-16">
          <div className="container">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Blog
            </h1>
            <p className="text-lg text-white/90">
              News, tips, and insights about apps and games
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-12">
          <div className="container max-w-6xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Card key={post.title} className="group overflow-hidden border-0 bg-gradient-to-b from-card to-secondary/20 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-hover)] hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="flex h-48 items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 text-6xl">
                      {post.image}
                    </div>
                    <div className="p-6">
                      <div className="mb-3 flex items-center gap-2">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="mb-2 text-xl font-semibold group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="mb-4 text-sm text-muted-foreground line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                      </div>
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
