'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Twitter, Instagram, MessageCircle } from 'lucide-react';

export default function CloverCoinLanding() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // Prevent flash of unstyled content
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <header className="bg-green-600 text-white p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img 
              src="/clover.jpg?height=40&width=40" 
              alt="CloverCoin Logo" 
              className="w-10 h-10 bg-white rounded-full"
            />
            <span className="text-2xl font-bold">CloverCoin</span>
          </div>
          <nav>
            <ul className="flex gap-6">
              {['DEX', 'Clover Mini App'].map((item, index) => (
                <li key={index}>
                  <Button
                    variant="ghost"
                    className="relative text-white hover:text-black transition-colors group"
                  >
                    {item}
                    <span className="absolute -top-1 -right-1 bg-yellow-400 text-xs px-2 py-0.5 rounded text-black opacity-0 group-hover:opacity-100 transition-opacity">
                      Soon!
                    </span>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <div className="relative h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/banner.jpg?height=1080&width=1920')`
          }}
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
            Welcome to CloverCoin
          </h1>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <Card className="mb-12">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">About CloverCoin</h2>
            <p className="text-lg text-gray-700">
              CloverCoin is the luckiest meme coin in the crypto universe! Born from the mystical fields 
              of the internet, our four-leaf clover token brings fortune and fun to all who hold it. 
              Join our community of lucky leprechauns and watch your wealth grow greener than ever!
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            {
              title: "🍀 Lucky Tokenomics",
              content: "CloverCoin features a unique tokenomics model designed to bring luck to all holders. With a total supply of 777 billion tokens, 7% of each transaction is redistributed to all holders, ensuring everyone's pot of gold keeps growing!",
              gradient: "from-emerald-500 to-green-600"
            },
            {
              title: "🌈 Community Driven",
              content: "Our vibrant community is the heart of CloverCoin. Join our lucky clan of hodlers, memers, and crypto enthusiasts. Together, we'll create the most entertaining and rewarding journey in the meme coin space!",
              gradient: "from-sky-500 to-blue-600"
            },
            {
              title: "🚀 Roadmap to the Moon",
              content: "CloverCoin's journey is paved with golden milestones. From major exchange listings to innovative DeFi features, our roadmap is designed to take us beyond the moon and into the stars. Every step forward increases our collective luck!",
              gradient: "from-violet-500 to-purple-600"
            },
            {
              title: "🔒 Luck-Locked Liquidity",
              content: "Security is our priority. CloverCoin's liquidity is locked in a magical vault, secured by leprechaun technology. This ensures stable trading and protects our community from rugpulls. Your luck is safe with us!",
              gradient: "from-amber-500 to-yellow-600"
            }
          ].map((item, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden transition-transform hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-90 transition-opacity group-hover:opacity-100`} />
              <CardContent className="relative p-6">
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-white/90">{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="bg-green-600 rounded-xl text-white p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">🍀 Stay Lucky, Stay Informed 🍀</h2>
          <p className="text-center mb-6">
            Subscribe to our newsletter for the latest CloverCoin updates and lucky opportunities!
          </p>
          <form className="max-w-md mx-auto flex gap-2">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              required 
              className="bg-white"
            />
            <Button type="submit" className="bg-white text-green-600 hover:bg-green-50">
              Subscribe
            </Button>
          </form>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-bold mb-6">Join Our Community</h2>
          <div className="flex justify-center gap-8">
            {[
              { Icon: Twitter, label: "Twitter" },
              { Icon: MessageCircle, label: "Telegram" },
              { Icon: Instagram, label: "Instagram" }
            ].map(({ Icon, label }, index) => (
              <Button
                key={index}
                variant="ghost"
                size="lg"
                className="text-green-600 hover:text-green-700 hover:scale-110 transition-transform bg-transparent hover:bg-transparent"
              >
                <Icon className="h-12 w-16" />
                <span className="sr-only">{label}</span>
              </Button>


            ))}
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 CloverCoin. All rights reserved. May the luck be with you! 🍀</p>
        </div>
      </footer>
    </div>
  )
}