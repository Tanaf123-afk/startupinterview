"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that best fits your needs. All plans include our core AI-powered interview practice.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Free</h2>
              <p className="text-gray-600">Perfect for getting started</p>
              <div className="mt-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-gray-600">/month</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span>1 sample interview per day</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span>Basic AI feedback</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span>Access to common interview questions</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span>Community support</span>
              </li>
            </ul>

            <Button 
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900"
              asChild
            >
              <Link href="/auth/signup">Get Started</Link>
            </Button>
          </div>

          {/* Premium Plan */}
          <div className="bg-blue-600 rounded-2xl shadow-lg p-8 text-white">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Premium</h2>
              <p className="text-blue-100">For serious job seekers</p>
              <div className="mt-4">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-blue-100">/month</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-200" />
                <span>Unlimited practice interviews</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-200" />
                <span>Advanced AI feedback & analysis</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-200" />
                <span>Custom interview questions</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-200" />
                <span>Progress tracking & analytics</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-200" />
                <span>Priority support</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-200" />
                <span>Job description analysis</span>
              </li>
            </ul>

            <Button 
              className="w-full bg-white hover:bg-blue-50 text-blue-600"
              asChild
            >
              <Link href="/auth/signup?plan=premium">Upgrade Now</Link>
            </Button>
          </div>

          {/* Team Plan */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-blue-600">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Team</h2>
              <p className="text-gray-600">For companies & teams</p>
              <div className="mt-4">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-gray-600">/month</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600" />
                <span>Everything in Premium</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600" />
                <span>Up to 5 team members</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600" />
                <span>Team performance analytics</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600" />
                <span>Custom company questions</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600" />
                <span>Dedicated account manager</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600" />
                <span>API access</span>
              </li>
            </ul>

            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              asChild
            >
              <Link href="/auth/signup?plan=team">Contact Sales</Link>
            </Button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-20">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Can I switch plans later?</h3>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards and PayPal. All payments are processed securely through Stripe.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Is there a refund policy?</h3>
              <p className="text-gray-600">Yes, we offer a 14-day money-back guarantee if you're not satisfied with our service.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">How does the Team plan work?</h3>
              <p className="text-gray-600">The Team plan allows you to add up to 5 team members, each with their own Premium features. Contact our sales team for custom team sizes or enterprise solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 