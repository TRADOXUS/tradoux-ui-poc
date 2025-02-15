import Image from "next/image";
import Link from "next/link";

// Define the modules based on our PRD
const modules = [
  {
    id: 1,
    title: "Fundamental Financial Concepts",
    description: "Learn about price vs. value, financial assets, and market dynamics",
    icon: "📊",
  },
  {
    id: 2,
    title: "Crypto Ecosystem",
    description: "Explore blockchain technology, tokenomics, and crypto infrastructure",
    icon: "🌐",
  },
  {
    id: 3,
    title: "Fundamentals of Crypto Trading",
    description: "Master trading basics, order types, and essential trading tools",
    icon: "📈",
  },
  {
    id: 4,
    title: "Basic Technical Analysis",
    description: "Learn chart interpretation, technical indicators, and pattern recognition",
    icon: "📉",
  },
  {
    id: 5,
    title: "Psychotrading",
    description: "Develop emotional management and trading discipline strategies",
    icon: "🧠",
  },
  {
    id: 6,
    title: "Strategies and Risk Management",
    description: "Master capital management, performance metrics, and risk management",
    icon: "🎯",
  },
  {
    id: 7,
    title: "Practical Application",
    description: "Apply your knowledge through simulations and real trading cases",
    icon: "⚡",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Tradoxus
          </Link>
          <div className="flex gap-6">
            <Link href="/modules" className="hover:text-blue-600">Modules</Link>
            <Link href="/dashboard" className="hover:text-blue-600">Dashboard</Link>
            <Link href="/profile" className="hover:text-blue-600">Profile</Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Master Crypto Trading
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Learn from fundamentals to advanced strategies with our comprehensive, interactive learning platform.
            </p>
            <Link
              href="/modules"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              Start Learning
            </Link>
          </div>
        </section>

        {/* Modules Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Learning Modules</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modules.map((module) => (
                <Link
                  key={module.id}
                  href={`/modules/${module.id}`}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl mb-4">{module.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                  <p className="text-gray-600">{module.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Tradoxus</h3>
              <p className="text-gray-400">
                Your comprehensive platform for mastering crypto trading.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/modules" className="text-gray-400 hover:text-white">Modules</Link></li>
                <li><Link href="/dashboard" className="text-gray-400 hover:text-white">Dashboard</Link></li>
                <li><Link href="/profile" className="text-gray-400 hover:text-white">Profile</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">support@tradoxus.com</li>
                <li className="text-gray-400">Follow us on Twitter</li>
                <li className="text-gray-400">Join our Discord</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Tradoxus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
