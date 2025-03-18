// import Appbar from "@/components/Appbar";
import { Activity, Bell, Shield, Clock, ArrowRight, Check } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16">
        <nav className="flex items-center justify-between mb-16">
          <div className="flex items-center space-x-2">
            <Activity className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold">UptimeGuard</span>
          </div>
          <div className="flex items-center space-x-8">
            <a
              href="#features"
              className="hover:text-blue-400 transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="hover:text-blue-400 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg transition-colors">
              Get Started
            </button>
          </div>
        </nav>

        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Monitor Your Services with Confidence
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Real-time monitoring, instant alerts, and comprehensive insights for
            your web applications and services.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg flex items-center space-x-2 transition-colors">
              <span>Start Monitoring</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-gray-700 hover:border-gray-600 px-8 py-3 rounded-lg transition-colors">
              View Demo
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="bg-gray-800 py-20" id="features">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Why Choose UptimeGuard?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Bell className="w-8 h-8 text-blue-500" />}
              title="Instant Alerts"
              description="Get notified immediately when your services experience downtime or performance issues."
            />
            <FeatureCard
              icon={<Clock className="w-8 h-8 text-blue-500" />}
              title="24/7 Monitoring"
              description="Round-the-clock monitoring ensures your services are always performing optimally."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-blue-500" />}
              title="Secure & Reliable"
              description="Enterprise-grade security and reliability you can trust."
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <StatCard number="99.9%" text="Average Uptime" />
            <StatCard number="5000+" text="Active Users" />
            <StatCard number="1M+" text="Checks Per Day" />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-800 py-20" id="pricing">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Starter"
              price="$29"
              features={[
                "Up to 10 monitors",
                "5-minute check intervals",
                "Email notifications",
                "24-hour data retention",
              ]}
            />
            <PricingCard
              title="Professional"
              price="$79"
              features={[
                "Up to 50 monitors",
                "1-minute check intervals",
                "SMS & Slack notifications",
                "30-day data retention",
                "API access",
              ]}
              highlighted
            />
            <PricingCard
              title="Enterprise"
              price="Custom"
              features={[
                "Unlimited monitors",
                "30-second check intervals",
                "Custom integrations",
                "1-year data retention",
                "Dedicated support",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Activity className="w-6 h-6 text-blue-500" />
                <span className="font-bold">UptimeGuard</span>
              </div>
              <p className="text-gray-400">
                Making uptime monitoring simple and reliable for everyone.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function StatCard({ number, text }) {
  return (
    <div>
      <div className="text-4xl font-bold text-blue-500 mb-2">{number}</div>
      <div className="text-gray-400">{text}</div>
    </div>
  );
}

function PricingCard({ title, price, features, highlighted = false }) {
  return (
    <div
      className={`${highlighted ? "bg-blue-500" : "bg-gray-900"} p-8 rounded-lg relative ${highlighted ? "transform scale-105" : ""}`}
    >
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="text-3xl font-bold mb-6">
        {price}
        <span className="text-lg font-normal">
          {price !== "Custom" ? "/mo" : ""}
        </span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <Check className="w-5 h-5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-2 rounded-lg transition-colors ${
          highlighted
            ? "bg-white text-blue-500 hover:bg-gray-100"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        Get Started
      </button>
    </div>
  );
}
