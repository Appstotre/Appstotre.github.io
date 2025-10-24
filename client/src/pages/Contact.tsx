import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[var(--gradient-hero)] py-16">
          <div className="container">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Contact Us
            </h1>
            <p className="text-lg text-white/90">
              Get in touch with our team
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16">
          <div className="container max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <h2 className="mb-6 text-2xl font-bold">Send us a message</h2>
                <form className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium">Name</label>
                    <Input placeholder="Your name" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Subject</label>
                    <Input placeholder="How can we help?" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Message</label>
                    <Textarea placeholder="Your message..." rows={6} />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-muted-foreground">support@appstore.com</p>
                        <p className="text-muted-foreground">business@appstore.com</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                        <p className="text-muted-foreground">Mon-Fri 9am-6pm EST</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Office</h3>
                        <p className="text-muted-foreground">123 App Street</p>
                        <p className="text-muted-foreground">San Francisco, CA 94102</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-secondary/50 p-6">
                  <h3 className="mb-3 font-semibold">Business Inquiries</h3>
                  <p className="text-sm text-muted-foreground">
                    For partnership opportunities, developer relations, or media inquiries, 
                    please contact our business team at business@appstore.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
