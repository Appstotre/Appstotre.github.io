import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const faqs = [
  {
    question: "How do I download apps from AppStore?",
    answer: "Simply search for the app you want, click on it, and press the 'Install' button. The app will be downloaded and installed on your device automatically."
  },
  {
    question: "Is it safe to download apps from AppStore?",
    answer: "Yes! All apps on AppStore are thoroughly scanned for malware and viruses before being made available. We maintain strict security standards to ensure your safety."
  },
  {
    question: "Why can't I install an app?",
    answer: "This could be due to insufficient storage space, incompatible device version, or network issues. Check that you have enough storage and a stable internet connection."
  },
  {
    question: "How do I update my apps?",
    answer: "Go to 'My Apps' section and you'll see all apps with available updates. You can update them individually or all at once using the 'Update All' button."
  },
  {
    question: "Can I use AppStore on multiple devices?",
    answer: "Yes! You can use your AppStore account on multiple devices. Just sign in with the same account on each device."
  },
  {
    question: "How do I uninstall an app?",
    answer: "Go to your device's settings, find the app in your applications list, and select 'Uninstall'. You can also uninstall apps directly from the AppStore app."
  },
  {
    question: "What should I do if an app crashes?",
    answer: "Try clearing the app's cache, restarting your device, or reinstalling the app. If the problem persists, contact our support team."
  },
  {
    question: "How do I report a problematic app?",
    answer: "You can report an app by clicking the 'Report' button on the app's page. Select the issue type and provide details about the problem."
  },
  {
    question: "Are there any fees to use AppStore?",
    answer: "AppStore is completely free to use. Some apps may have in-app purchases or premium versions, but the platform itself is free."
  },
  {
    question: "How do I contact customer support?",
    answer: "You can reach our support team via email at support@appstore.com or through the Contact page. We typically respond within 24 hours."
  },
];

export default function HelpCenter() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[var(--gradient-hero)] py-16">
          <div className="container">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Help Center
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Find answers to common questions
            </p>
            <div className="relative max-w-2xl">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for help..."
                className="pl-10 bg-white"
              />
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <div className="container max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-gradient-to-b from-card to-secondary/20">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16 bg-secondary/30">
          <div className="container max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold">Still need help?</h2>
            <p className="mb-6 text-muted-foreground">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <a href="/contact" className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90">
              Contact Support
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
