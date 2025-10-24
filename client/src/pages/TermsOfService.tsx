import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[var(--gradient-hero)] py-16">
          <div className="container">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Terms of Service
            </h1>
            <p className="text-lg text-white/90">
              Last updated: January 2025
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container max-w-4xl prose prose-lg">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using AppStore, you accept and agree to be bound by these Terms of Service. 
                  If you do not agree to these terms, please do not use our platform.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. User Accounts</h2>
                <p className="text-muted-foreground mb-3">When you create an account with us, you agree to:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Be responsible for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized access</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. Use of Service</h2>
                <p className="text-muted-foreground mb-3">You agree to use AppStore only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on others' intellectual property rights</li>
                  <li>Upload malicious code or harmful software</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Use automated systems to access the service</li>
                  <li>Engage in any activity that disrupts the service</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Content and Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All content on AppStore, including but not limited to text, graphics, logos, and software, 
                  is the property of AppStore or its content suppliers and is protected by copyright and 
                  other intellectual property laws.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. User-Generated Content</h2>
                <p className="text-muted-foreground">
                  By submitting content (reviews, ratings, comments), you grant AppStore a worldwide, 
                  non-exclusive, royalty-free license to use, reproduce, and distribute your content 
                  in connection with the service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. App Downloads</h2>
                <p className="text-muted-foreground">
                  While we strive to provide safe and verified apps, we do not guarantee that all apps 
                  are free from errors or defects. Download and use apps at your own risk. We recommend 
                  reviewing app permissions and ratings before installation.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Privacy</h2>
                <p className="text-muted-foreground">
                  Your use of AppStore is also governed by our Privacy Policy. Please review our Privacy 
                  Policy to understand our practices regarding your personal information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">8. Disclaimer of Warranties</h2>
                <p className="text-muted-foreground">
                  AppStore is provided "as is" and "as available" without warranties of any kind, either 
                  express or implied. We do not warrant that the service will be uninterrupted, secure, 
                  or error-free.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  To the fullest extent permitted by law, AppStore shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages resulting from your use of or 
                  inability to use the service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">10. Termination</h2>
                <p className="text-muted-foreground">
                  We reserve the right to terminate or suspend your account and access to the service 
                  immediately, without prior notice, for any reason, including breach of these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">11. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these Terms at any time. We will notify users of any 
                  material changes by posting the new Terms on this page and updating the "Last updated" 
                  date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms, please contact us at legal@appstore.com
                </p>
              </div>

              <div className="mt-8 rounded-lg bg-secondary/50 p-6">
                <p className="text-sm text-muted-foreground">
                  By using AppStore, you acknowledge that you have read, understood, and agree to be 
                  bound by these Terms of Service.
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
