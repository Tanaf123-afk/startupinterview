import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
          <div className="p-8 md:p-16 text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Ace Your Next Interview?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join thousands of professionals who have improved their interview skills and landed their dream jobs with InterviewPro.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/browse">Get Started for Free</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white hover:border-white focus:bg-blue-800 focus:text-white transition-colors duration-200"
                asChild
              >
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}