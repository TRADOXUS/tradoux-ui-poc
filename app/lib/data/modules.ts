import { Module } from '../types/module';

export const modules: Module[] = [
  {
    id: 1,
    title: "Fundamental Financial Concepts",
    description: "Learn about price vs. value, financial assets, and market dynamics",
    progress: 75,
    icon: "📊",
    capsules: [
      {
        id: 1,
        title: "Understanding Price vs Value",
        completed: true,
        content: "Learn the fundamental difference between price and value in financial markets...",
        examples: [
          "Stock market valuations vs market price",
          "Intrinsic value calculation examples"
        ],
        exercises: [
          {
            question: "What is the main difference between price and value?",
            options: [
              "They are the same thing",
              "Price is what you pay, value is what you get",
              "Value is always higher than price",
              "Price is always higher than value"
            ],
            answer: "Price is what you pay, value is what you get"
          }
        ]
      },
      { id: 2, title: "Financial Assets Overview", completed: true },
      { id: 3, title: "Market Dynamics", completed: true },
      { id: 4, title: "Supply and Demand", completed: false },
    ],
  },
  {
    id: 2,
    title: "Crypto Ecosystem",
    description: "Explore blockchain technology, tokenomics, and crypto infrastructure",
    progress: 50,
    icon: "🌐",
    capsules: [
      { id: 1, title: "Blockchain Fundamentals", completed: true },
      { id: 2, title: "Understanding Tokenomics", completed: true },
      { id: 3, title: "Centralized vs Decentralized Exchanges", completed: false },
      { id: 4, title: "Wallets and Security", completed: false },
    ],
  },
  {
    id: 3,
    title: "Fundamentals of Crypto Trading",
    description: "Master trading basics, order types, and essential trading tools",
    progress: 0,
    icon: "📈",
    capsules: [
      { id: 1, title: "Introduction to Trading", completed: false },
      { id: 2, title: "Order Types Explained", completed: false },
      { id: 3, title: "Trading Tools Overview", completed: false },
      { id: 4, title: "Risk Management Basics", completed: false },
    ],
  },
  {
    id: 4,
    title: "Basic Technical Analysis",
    description: "Learn chart interpretation, technical indicators, and pattern recognition",
    progress: 0,
    icon: "📉",
    capsules: [
      { id: 1, title: "Chart Basics", completed: false },
      { id: 2, title: "Technical Indicators", completed: false },
      { id: 3, title: "Pattern Recognition", completed: false },
      { id: 4, title: "Trend Analysis", completed: false },
    ],
  },
  {
    id: 5,
    title: "Psychotrading",
    description: "Develop emotional management and trading discipline strategies",
    progress: 0,
    icon: "🧠",
    capsules: [
      { id: 1, title: "Trading Psychology", completed: false },
      { id: 2, title: "Emotional Management", completed: false },
      { id: 3, title: "Building Trading Discipline", completed: false },
      { id: 4, title: "Common Psychological Pitfalls", completed: false },
    ],
  },
  {
    id: 6,
    title: "Strategies and Risk Management",
    description: "Master capital management, performance metrics, and risk management",
    progress: 0,
    icon: "🎯",
    capsules: [
      { id: 1, title: "Position Sizing", completed: false },
      { id: 2, title: "Risk-Reward Ratios", completed: false },
      { id: 3, title: "Portfolio Management", completed: false },
      { id: 4, title: "Advanced Risk Management", completed: false },
    ],
  },
  {
    id: 7,
    title: "Practical Application",
    description: "Apply your knowledge through simulations and real trading cases",
    progress: 0,
    icon: "⚡",
    capsules: [
      { id: 1, title: "Trading Simulations", completed: false },
      { id: 2, title: "Case Studies", completed: false },
      { id: 3, title: "Market Analysis", completed: false },
      { id: 4, title: "Trading Plan Development", completed: false },
    ],
  },
]; 