import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function CommunityGuidelines() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[var(--gradient-hero)] py-16">
          <div className="container">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Community Guidelines
            </h1>
            <p className="text-lg text-white/90">
              Building a safe and respectful community together
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container max-w-4xl prose prose-lg">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Values</h2>
                <p className="text-muted-foreground">
                  AppStore is committed to fostering a welcoming, inclusive community where everyone 
                  feels safe and respected. These guidelines help us maintain a positive environment 
                  for all users.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Be Respectful</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Treat others with kindness and respect</li>
                  <li>No harassment, bullying, or hate speech</li>
                  <li>Respect different opinions and perspectives</li>
                  <li>Use appropriate language in reviews and comments</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Keep it Safe</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Don't share personal information publicly</li>
                  <li>Report suspicious or harmful content</li>
                  <li>Don't attempt to hack or exploit the platform</li>
                  <li>Protect your account credentials</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Be Honest</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Write genuine reviews based on your experience</li>
                  <li>Don't manipulate ratings or reviews</li>
                  <li>Report fake or misleading apps</li>
                  <li>Be transparent about affiliations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Respect Privacy</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Don't share others' private information</li>
                  <li>Respect copyright and intellectual property</li>
                  <li>Don't distribute pirated content</li>
                  <li>Honor other users' privacy preferences</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Prohibited Content</h2>
                <p className="text-muted-foreground mb-3">The following types of content are strictly prohibited:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Illegal activities or content</li>
                  <li>Violence, gore, or graphic content</li>
                  <li>Adult or sexually explicit material</li>
                  <li>Spam, scams, or fraudulent schemes</li>
                  <li>Malware or malicious software</li>
                  <li>Discrimination or hate speech</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Enforcement</h2>
                <p className="text-muted-foreground">
                  Violations of these guidelines may result in content removal, account suspension, 
                  or permanent ban, depending on the severity. We review all reports carefully and 
                  take appropriate action.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Reporting Violations</h2>
                <p className="text-muted-foreground">
                  If you see content or behavior that violates these guidelines, please report it 
                  immediately. You can report apps, reviews, or users through the platform or by 
                  contacting our support team at support@appstore.com.
                </p>
              </div>

              <div className="mt-8 rounded-lg bg-secondary/50 p-6">
                <p className="text-sm text-muted-foreground">
                  These guidelines are subject to change. Last updated: January 2025
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
